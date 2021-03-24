const EventComponent: React.FC = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im being dragged');
  };

  return (
    <div>
      <input onChange={onChange}></input>
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  );
};

export default EventComponent;
