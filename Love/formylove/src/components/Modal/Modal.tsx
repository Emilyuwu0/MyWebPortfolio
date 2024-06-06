import { useState } from "react";
import Cards from "../Card/Card";
import "./modal.css";
import Osito from "../../assets/uwu.png";
import Cloud from "../../assets/cloud.png";
import Cora from "../../assets/cora.png";
import Moon from "../../assets/moon.png";
import Bear from "../../assets/bear.png";
interface ModalProps {
  onClose: () => void;
}

export default function ModalJs({ onClose }: ModalProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [modalOpen4, setModalOpen4] = useState(false);
  const [modalOpen5, setModalOpen5] = useState(false);
  const [modalOpen6, setModalOpen6] = useState(false);
  const [modalOpen7, setModalOpen7] = useState(false);
  const [modalOpen8, setModalOpen8] = useState(false);
  const handleDivClick = (modalNumber: number) => {
    switch (modalNumber) {
      case 1:
        setModalOpen(true);
        break;
      case 2:
        setModalOpen2(true);
        break;
      case 3:
        setModalOpen3(true);
        break;
      case 4:
        setModalOpen4(true);
        break;
      case 5:
        setModalOpen5(true);
        break;
      case 6:
        setModalOpen6(true);
        break;
      case 7:
        setModalOpen7(true);
        break;
      case 8:
        setModalOpen7(true);
        break;
      default:
        break;
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalOpen2(false);
    setModalOpen3(false);
    setModalOpen4(false);
    setModalOpen5(false);
    setModalOpen6(false);
    setModalOpen7(false);
    setModalOpen8(false);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content card1"
          onClick={(e) => e.stopPropagation()}
        >
          <div onClick={() => handleDivClick(1)}>
            <Cards
              onClose={closeModal}
              img={Osito}
              title="Amorsh ♡"
              description="Siento que mi amor por ti cada día va aumentando más,
              
              mis ganas de estar contigo son muy altas. ˖ °"
              title2="⤷ Presioname"
            />
          </div>
        </div>

        <div
          className="modal-content card2"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen && (
            <Cards
              img={Cloud}
              title="Solo una cosa le pido al cielo ₊⊹"
              description="Y es que tú y yo podamos ser y estar: en tiempo y lugar, en presente y en futuro, en mente y cuerpo, pero sobre todo, estar entre nuestros brazos para concretar este hermoso sueño, uno que se hizo realidad el día que nos conocimos."
              title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(2)}
            />
          )}
        </div>

        <div
          className="modal-content card3"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen2 && (
            <Cards
              img={Cora}
              description="Cuando se me partió el corazón por lo que vivió en su pasado… me di cuenta de que lo que sentía por él…. era amor…
            Cuando escuché su voz calmada… me emocione mucho. No quería que volviera a sufrir  solo nunca más.  
            Es allí que decidí protegerlo y amarlo en la forma que fuera”.
            Lo quiero… lo quiero mucho."
              title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(3)}
            />
          )}
        </div>

        <div
          className="modal-content card4"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen3 && (
            <Cards
              img={Bear}
              title="Para amar ࿐࿔"
              description="            Entre el amor y la desesperación te encuentras tu, entre el ser y no ser te encuentras tú, entre mi mente y mi corazón apareces tú; y es que no se trata de que vengas a mi pensamiento, lo cierto es que nunca te vas de el, eres recurrente, cómo algo intrínseco de mi, cómo mi sombra o respiración. Requiero de que estés aquí para vivir, para soñar,"
            
              title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(4)}
            />
          )}
        </div>

        <div
          className="modal-content card5"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen4 && (
            <Cards
              img={Moon}
              title="Loviu  ‧₊ ᵎᵎ"
              description="Cada día que pasa mi amor hacia ti aumenta, me gustaría pasar el resto de mi vida contigo, me siento tan afortunada de poder decirle a todos que alguien tan lindo como tú sea mi marido, el chico que siempre soñe y con el que quiero estar toda mi vida, te amaré por siempre. ₊˚ෆ"
              title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(5)}
            />
          )}
        </div>
        <div
          className="modal-content card6"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen5 && (
            <Cards
            title="₍ ᐢ. ̫ .ᐢ ₎"
            description="Everything is peaceful and lovely with you around"
            title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(6)}
            />
          )}
        </div>
        <div
          className="modal-content card7"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen6 && (
            <Cards
              title="˚୨Animo bebe ୧⋆｡"
              description="Tú pudiste, puedes, y podrás siempre! Nunca dudes de eso, porque yo sé que siempre podrás! Y recuerda que lo estás haciendo genial, muy genial, te prometo que todo ese esfuerzo que estás haciendo tendrá una recompensa muy buena! Yo siempre voy a estar para ti, en los malos y buenos momentos"
              title2="⤷ Presioname"
              onClose={closeModal}
              handleDivClick={() => handleDivClick(7)}
            />
          )}
        </div>
        <div
          className="modal-content card8"
          onClick={(e) => e.stopPropagation()}
        >
          {modalOpen7 && (
            <Cards
              title="₍ᐢ. .ᐢ₎"
              description="No quiero un fin contigo, sino una infinidad."  
              title2="⤷ Gracias por leer <3"            onClose={closeModal}
              handleDivClick={() => handleDivClick(8)}
            />
          )}
        </div>
      </div>
    </>
  );
}
