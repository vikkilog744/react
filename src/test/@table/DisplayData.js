import "./DisplayData.css";

const DisplayData = (props) => {
  if (!props.excelData.length) {
    return <div className="noFileContainer">No File Uploaded</div>;
  }
  const table = props.excelData;
  const tableBody = table?.slice(1);
  const tableHead = table[0];
  const keys = Object.keys(tableHead);

  return (
    <div className="displayData">
      <table>
        <thead>
          <tr>
            {keys.map((key, idx) => (
              <th key={`th_${idx}`}>{tableHead[key]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBody.map((row, index) => (
            <tr key={`tr_${index}`}>
              {keys.map((key, idx) => (
                <td key={`td_${idx}`}>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;