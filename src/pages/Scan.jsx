import React, { forwardRef, useState } from "react";
import css from "../styles/scan.module.scss";
import { Upload } from "antd";

const Scan = forwardRef((props, ref) => {
  const [fileList, setFileList] = useState([]);
  console.log(fileList.length);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div ref={ref} className={css.scanContainer}>
      <span className={css.scanText}>Scan your Document</span>
      <div className={css.uploadDiv}>
        <Upload
          action="#"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          className={css.upload}
        >
          {fileList.length < 1 && "+ Upload"}
        </Upload>

        <button className={css.btn}>Scan</button>
      </div>
    </div>
  );
});

export default Scan;
