// import { useState } from 'react';
// import { useSelector } from 'react-redux';

// import RadioIcons from './Icon';

// import RadioImages from 'shared/components/radioButtons/RadioImages';



  
//   const [iconName, setIconName] = useState('icon-project');

//   let updatedBackground;
//   let updatedIcon;
//   if (btnName === 'Edit') {
//     updatedBackground =
//       backgroundName !== '00' ? backgroundName : currentBoard.background;

//     updatedIcon = iconName !== 'icon-project' ? iconName : currentBoard.icon;
//   }

//   return (
//     <Modal onClose={onClose}>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="dark"
//       />
//       <ModalTitle>{title}</ModalTitle>

//       <Formik
//         initialValues={{
//           boardTitle: boardName,
//         }}
//         validationSchema={TitleSchema}
//         onSubmit={(values, { resetForm }) => {
//           if (btnName === 'Create') {
//             if (boards.some(el => el.title === values.boardTitle)) {
//               setIsDuplicate(true);
//               return toast.warn('This title already exists!');
//             }
//             const boardInfo = {
//               values,
//               background: backgroundName,
//               icon: iconName,
//             };
//             onCreateBoard(boardInfo);
//             setIsDuplicate(false);
//           } else if (btnName === 'Edit') {
//             if (
//               boards.some(
//                 el => el.title === values.boardTitle && el !== currentBoard
//               )
//             ) {
//               setIsDuplicate(true);
//               return toast.warn('This title already exists!');
//             }
//             const boardInfoEdit = {
//               values,
//               background: updatedBackground,
//               icon: updatedIcon,
//             };

//             onEditBoard(boardInfoEdit);
//             setIsDuplicate(false);
//           }

//           resetForm();
//           onClose();
//         }}
//       >
//         {({ handleChange, values }) => (
//           <Form>
//             <label htmlFor="boardTitle"></label>
//             <InputField
//               text="Title"
//               id="boardTitle"
//               name="boardTitle"
//               type="text"
//               onChange={handleChange}
//               value={values.boardTitle || ''}
//             />
//             <InputErrorMessage name="boardTitle" component={'p'} />
//             {isDuplicate && <Duplicate>Title is duplicate!</Duplicate>}

//             <SubtitleStyled>Icons</SubtitleStyled>
//             <RadioIcons
//               onChangeIcon={setIconName}
//               currentBoardIcon={updatedIcon}
//             />
//             <SubtitleStyled>Background</SubtitleStyled>

//             <RadioImages
//               onChangeImage={setBackgroundName}
//               currentBoardBackground={updatedBackground}
//             />

//             <ButtonMain type="submit">
//               <BlackPlusButton />
//               {btnName}
//             </ButtonMain>
//           </Form>
//         )}
//       </Formik>
//     </Modal>
//   );
// };

// export default ModalBoard;