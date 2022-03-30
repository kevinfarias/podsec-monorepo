import styles from './Carousel.module.scss';

export default function Carousel({ title, description, image }) {
    return (
        <div className={styles.carousel}>
            {!image || <img src={image} className="imageCarousel" />}
            {!title || <h1 className="carouselTitle">{title}</h1>}
            {!description || <p className="carouselDescription">{description}</p>}
        </div>
    );
}