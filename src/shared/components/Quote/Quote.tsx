import React from "react";
import "./Quote.scss";

type QuoteProps = {
  image?: string;
  alt?: string;
  subtitle: string;
  quote: string;
  author: string;
};

function Quote({ image, alt, subtitle, quote, author }: QuoteProps) {
  return (
    <div className="Quote">
      <div className="center section-padding">
        <span className="subject">{subtitle}</span>
        <h1 className="title with-subject">“{quote}”</h1>
        <p className="content center s16">– {author}</p>
        {image && (
          <p className="center">
            <img className="image-responsive" src={image} alt={alt} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Quote;
