// import Files from "react-butterfiles";
// import { useState } from "react";
// import { useRecoilState, useSetRecoilState } from "recoil";
// import { registerDataAtom } from "../statedrive/atoms";
// import { useSharedState } from "../statedrive";
// const ImageUpload = () => {
//     const [fileName, setFileName] = useState("");
//     const [form, setForm] = useSharedState(registerDataAtom);
//     return <>
//         <Files
//             multiple={false}
//             maxSize="5mb"
//             convertToBase64={true}
//             name="image"
//             accept={["image/png", "image/jpg", "image/jpeg"]}
//             onSuccess={async (files) => {
//                 setFileName(files[0].name)
//                 setForm({
//                     ...form,
//                     image: files[0].base64
//                 })
                
//             }
//             }
//             onError={error => console.log(error)}
//         >
//             {({ browseFiles, getLabelProps }) => (
//                 <>
//                     <label {...getLabelProps()}>{fileName}</label>
//                     <button onClick={browseFiles}>Upload Image (png,jpg)</button>
//                 </>
//             )}
//         </Files>
//     </>
// }
// export default ImageUpload;