export default function Button({
    text,
    href,
    margin,
    backgroundColor,
    border,
    all,
    color
}) {
    return (
        <a href={href} className="btn" style={{ all: all, margin: margin }}>
            <span
                style={{ backgroundColor: backgroundColor, border: border, color:color }}
                className="btn-text"
            >
                {text}
            </span>
        </a>
    );
}
