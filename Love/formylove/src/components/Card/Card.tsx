import React from "react";
import "./Card.css";
interface CardProps {
  title?: string;
  description?: string;
  img?: string;
  title2?: string;
  description2?: string;
  img2?: string;
  onClose: () => void;
  handleDivClick?: (() => void) | undefined

}
export default function Cards({
  title,
  description,
  img,
  title2,
  description2,
  img2,
  onClose,
  handleDivClick
}: CardProps) {
  return (
  
      <div className="screen-card-card" onClick={ handleDivClick }>
        <div className="screen-card-header">
          <div className="screen-card-header-left">
            <div className="screen-card-header-button close"></div>
            <div className="screen-card-header-button maximize"></div>
            <div className="screen-card-header-button minimize"></div>
          </div>
          <div className="screen-card-header-right">
            <button className="screen-card-header-button" onClick={onClose}>
              X
            </button>
          </div>
        </div>
        <div className="screen-card-body">
          <div className="screen-card-body-item left">
            <div className="app-title-card">
              <img src={img} className="width-img"/>
              <span className="title-card-into">{title}</span>
              <span className="app-description">{description}</span>
              <span className="app-description2">{title2}</span>
            </div>
          </div>
       {/*    <div className="screen-card-body-item right">
            <div className="app-title-card">
              <span>{title2}</span>
              <span className="app-description">{description2}</span>
            </div>
          </div> */}
        </div>
      </div>

  );
}
