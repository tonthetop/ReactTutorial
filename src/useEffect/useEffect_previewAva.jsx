import { useEffect, useState } from "react";
function Content() {
  const [ava, setAva] = useState({});

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(ava);
    };
  }, [ava]);

  function handlePreview(e) {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAva(file);
  }

  return (
    <div>
      <input type="file" onChange={handlePreview} />
      {ava && (
        <div>
          <img src={ava.preview} alt="" />
        </div>
      )}
    </div>
  );
}

export default Content;
