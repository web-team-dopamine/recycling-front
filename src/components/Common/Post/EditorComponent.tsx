import { useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import EditorToolbar from './EditorToolbar';

const EditorComponent = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState('');

  // image 업로드 함수
  const imageHandler = () => {
    // 파일 업로드 위한 input 생성
    const input = document.createElement('input');
    const formData = new FormData();
    let url = '';

    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // 파일이 input 태그에 담기면 실행될 함수
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append('image', file[0]);

        // try {
        //     // 백엔드와 통신하는 코드 넣기
        //     const res = ''
        //     url = res.data.rul;

        //     // 커서의 위치를 알고 해당 위치에 이미지를 넣어주는 코드
        //     const range = QuillRef.current?.getEditor().getSelection()?.index;
        //     if (range !== null && range !== undefined) {
        //         let quill = QuillRef.current?.getEditor();

        //         quill?.setSelection(range, 1);

        //         quill?.clipboard.dangerouslyPasteHTML(
        //             range,
        //             `<img src=${url} alt="이미지 태그" />`
        //         )
        //     }

        //     return { ...res, success: true };
        // } catch(error) {
        //     const err = error as AxiosError;
        //     return {...err.response, success: false}
        // }
      }
    };
  };

  // editor module
  const modules = useMemo(
    () => ({
      toolbar: {
        container: '#toolbar',
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <div className="mx-auto max-w-4xl mt-6 mb-6">
      <div id="toolbar">
        <EditorToolbar />
      </div>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
        modules={modules}
        theme="snow"
        className="bg-white h-[600px] "
      />
    </div>
  );
};

export default EditorComponent;
