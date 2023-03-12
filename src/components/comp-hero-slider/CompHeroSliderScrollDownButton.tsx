import { SCompHeroSliderScrollDownButton } from "./styles/SCompHeroSliderScrollDownButton";

export const CompHeroSliderScrollDownButton: React.FC<any> = ({ ...props }) => (
  <SCompHeroSliderScrollDownButton>
    <div {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3203 19.0396V5.59961"
          stroke="white"
          strokeWidth="1.28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.1212 14.2388L12.3202 19.0397L7.51929 14.2388"
          stroke="white"
          strokeWidth="1.28"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </SCompHeroSliderScrollDownButton>
);
