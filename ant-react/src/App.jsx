import { Calendar, Card } from "antd";

const App = () => {
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <>
      <Card title="Calendar">
        <Calendar onPanelChange={onPanelChange} />;
      </Card>
    </>
  );
};

export default App;
