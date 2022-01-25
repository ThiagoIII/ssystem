import "./styles.scss";

const DragonItem = ({ name }: { name: string }) => {
  return (
    <>
      <ul className="dragonItem">
        <li>{name}</li>
        <li>Editar</li>
        <li>Deletar</li>
      </ul>
    </>
  );
};

export default DragonItem;
