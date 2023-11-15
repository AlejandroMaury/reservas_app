import Image from "next/image";
import monumental from "@/images/masmonumental.jpg";
import bombonera from "@/images/La_Bombonera.jpg";

Image;

function canchas() {
  return (
    <>
      <div className=" m-32  ">
        <ul className="grid grid-cols-4 gap-8 mt-40 ">
          <li className="border border-amber-300 p-3 pb-3">
            <h3 className="text-blue-700 text-2xl">Monumental </h3>
            <Image
              className="mt-2"
              src={monumental}
              width={500}
              height={500}
              alt="Aca va la imagen"
            />
            <p className="pt-5">
              El Estadio Monumental, también conocido como el Monumental de
              Núñez, estadio River Plate o por cuestiones de patrocinio estadio
              Mâs Monumental, es un recinto deportivo ubicado en la intersección
              de las avenidas Figueroa Alcorta y Udaondo del barrio de Belgrano,
              Buenos Aires, Argentina. Es propiedad del Club Atlético River
              Plate y fue inaugurado el 26 de mayo de 1938 por el presidente
              Antonio Vespucio Liberti, quien decidió su construcción. Cuenta
              con una capacidad de 84 567 espectadores, luego de las
              remodelaciones concluidas en 2023.
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            <h3 className="text-blue-700 text-2xl">La Bombonera </h3>
            <Image
              className="mt-2"
              src={bombonera}
              width={500}
              height={500}
              alt="Aca va la imagen"
            />
            <p className="pt-5">
              El Estadio Alberto J. Armando, conocido popularmente como La
              Bombonera, es un estadio de fútbol perteneciente al Club Atlético
              Boca Juniors, ubicado en el barrio de La Boca en la ciudad de
              Buenos Aires, Argentina. Fue inaugurado el 25 de mayo de 1940 y
              tiene una capacidad de 49 000 espectadores.
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            Presidente Perón
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, doloremque minus quidem temporibus, quas soluta totam
              asperiores eius libero necessitatibus cumque, commodi voluptate
              quia? Tenetur quaerat maxime maiores id laboriosam?
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            Ciudad de la Plata
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, doloremque minus quidem temporibus, quas soluta totam
              asperiores eius libero necessitatibus cumque, commodi voluptate
              quia? Tenetur quaerat maxime maiores id laboriosam?
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            Ciudad de la Plata
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, doloremque minus quidem temporibus, quas soluta totam
              asperiores eius libero necessitatibus cumque, commodi voluptate
              quia? Tenetur quaerat maxime maiores id laboriosam?
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            Ciudad de la Plata
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, doloremque minus quidem temporibus, quas soluta totam
              asperiores eius libero necessitatibus cumque, commodi voluptate
              quia? Tenetur quaerat maxime maiores id laboriosam?
            </p>
          </li>
          <li className="border border-amber-300 p-3">
            Ciudad de la Plata
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, doloremque minus quidem temporibus, quas soluta totam
              asperiores eius libero necessitatibus cumque, commodi voluptate
              quia? Tenetur quaerat maxime maiores id laboriosam?
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default canchas;
