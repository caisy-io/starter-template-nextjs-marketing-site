import { RetryLink } from "@apollo/client/link/retry";
import {
  ApolloClient,
  DefaultOptions,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { print } from "graphql";

const trimMax = (s: string, length: number) => {
  return s.length > length ? s.substring(0, length) + "..." : s;
};
const customFetch = (uri, options) => {
  return fetch(uri, options).then((response) => {
    if (response.status >= 400) {
      console.log(` uri`, uri);
      // or handle 400 errors
      try {
        /* eslint-disable no-console */
        console.error(`RESPONSE STATUS: ${response.status}`);
        /* eslint-disable no-console */
        try {
          if (options.body) {
            try {
              const jobj = JSON.parse(options.body);
              if (jobj.query) {
                console.error(
                  `REQUEST QUERY: ${trimMax(`${jobj.query}`, 10000)}`
                );
              }
            } catch (err) {
              console.error(`err parsing body`, err);
            }
          }

          /* eslint-disable no-console */
          console.error(`REQUEST BODY: ${trimMax(`${options.body}`, 200)}`);
        } catch (_) {
          console.error(`REQUEST BODY: ${trimMax(`${options.body}`, 200)}`);
        }
        /* eslint-disable no-console */
        // console.error(`RESPONSE BODY: ${trimMax(`${response.body}`, 200)}`);
      } catch (err) {
        /* eslint-disable no-console */
        console.log(` err logging error`, err);
      }

      return Promise.reject(response.status);
    }
    return response;
  });
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, ...x }) => {
    if ((networkError as any)?.statusCode === 400) {
      /* eslint-disable no-console */
      console.log(` print(operation.query)`, print(operation.query));
      /* eslint-disable no-console */
      console.error(
        `-- 400 ${URL} -- ${(networkError as any).bodyText}`,
        print(operation.query),
        x
      );
    } else {
      /* eslint-disable no-console */
      console.error(`--ERR ${networkError ? "NETWORK ERROR" : "ERROR"} ::`);
      /* eslint-disable no-console */
      console.error(networkError);
      if (graphQLErrors?.[0]?.extensions?.exception || graphQLErrors) {
        /* eslint-disable no-console */
        console.error(graphQLErrors);
        /* eslint-disable no-console */
        console.error(graphQLErrors?.[0]?.extensions?.exception);
        if (!networkError) {
          /* eslint-disable no-console */
          console.error(trimMax(print(operation.query), 200));
        }
      }
      if (operation.variables && Object.keys(operation.variables).length > 0) {
        /* eslint-disable no-console */
        console.error(`PARAMS: `, operation.variables);
      }
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          /* eslint-disable no-console */
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
    }
  }
);

const retryLink = new RetryLink({
  delay: {
    initial: 600,
    max: 12000,
    jitter: true,
  },
  attempts: {
    max: 4,
    retryIf: (error, _operation) => {
      if (
        `${error?.statusCode}`.charAt(0) == "4" ||
        error?.result?.errors?.[0]?.extensions?.code === "UNAUTHENTICATED"
      ) {
        return false;
      }
      return true;
    },
  },
});

const additiveLink = from([
  retryLink,
  errorLink,
  new HttpLink({
    uri: `https://cloud.caisy.io/api/e/v4/${process.env.CAISY_PROJECT_ID}/graphql`,
    headers: {
      "x-caisy-apikey": process.env.CAISY_API_KEY,
    },
    fetch: customFetch,
  }),
]);

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

export const client = new ApolloClient({
  link: additiveLink,
  cache: new InMemoryCache(),
  defaultOptions,
});
