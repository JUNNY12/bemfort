/*eslint no-unused-vars: ["error", { "args": "none" }]*/
type PaginationClickable = "true" | "false";
type autoPlayDelay = string
declare namespace JSX {
    interface IntrinsicElements {
        'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            navigation: string;
            slidesPerView: number;
            loop: boolean;
            speed: number;
            pagination?: string;
            effect?: string;
            spaceBetween?: number;
            onSwiper?: (swiper: unknown) => void;
            onSlideChange?: (swiper: unknown) => void;
            'pagination-clickable'?: PaginationClickable;
            'autoplay-delay'?: autoPlayDelay;
        };
        'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            // Add more properties
        };
    }
}