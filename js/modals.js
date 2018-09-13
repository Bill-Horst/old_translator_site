// $(document).ready(function() {
//
//   let modals = [
//     {
//       type: "government",
//       section: {
//         title: "offGovDocs",
//         '0': "famReg",
//         '1': "bCert",
//         '2': "dCert",
//         '3': "mCert"
//       }
//     },
//     {
//       type: "business"
//     },
//     {
//       type: "technology"
//     }
//   ];
//
//
//
//
//
//   for (let i = 0; i < modals.length; i++) {
//     $('#dynamic-modals').append(
//       `
//       <div class='modal fade ${modals[i].type}-modal' tabindex='-1' role='dialog' aria-hidden='true' data-keyboard='false'>
//         <div class='modal-dialog modal-lg'>
//           <div class='modal-content'>
//             <div class='modal-header'>
//               <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
//               <h2 class='modal-title' id='modal-title-${modals[i].type}-d'></h2>
//             </div>
//             <div class='modal-body'>
//               ${for (el in modals[i].section) {
//                 `<h3>`modals[i].section.title`</h3`
//               }}
//               <h3>Official Government Documents</h3>
//               <p>Family Registry</p>
//               <p>Birth Certificates</p>
//               <p>Death Certificates</p>
//               <p>Marriage Certificates</p>
//               <h3>Government Information</h3>
//               <p>Articles</p>
//               <p>Newsletters</p>
//               <p>placeholder</p>
//               <p>placeholder</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       `
//     );
//   }
//
// });
// //
// // <div class="col-md-4">
// //   <div class="skill-card">
// //     <a data-toggle='modal' data-target='.business-modal'>
// //       <div class="skill-card-top">
// //         <img src="/img/business.png" class="img-responsive">
// //       </div>
// //       <div class="skill-card-bottom">
// //         <div class="skill-card-title">
// //           <h2>Business</h2>
// //         </div>
// //       </div>
// //       <div class="overlayed-message">
// //         <h1>Click for more info</h1>
// //       </div>
// //     </a>
// //   </div>
// // </div>
// //
// // <div class="col-md-4">
// //   <div class="skill-card">
// //     <a data-toggle='modal' data-target='.technology-modal'>
// //       <div class="skill-card-top">
// //         <img src="/img/laptop.png" class="img-responsive">
// //       </div>
// //       <div class="skill-card-bottom">
// //         <div class="skill-card-title">
// //           <h2>Technology</h2>
// //         </div>
// //       </div>
// //       <div class="overlayed-message">
// //         <h1>Click for more info</h1>
// //       </div>
// //     </a>
// //   </div>
// // </div>
//
//
//
//
//
//
//
//
//
//
//
//
// // <div class='modal-header'>
// //   <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
// //   <h2 class='modal-title' id='myModalLabel'>Government Translations</h2>
// // </div>
// // <div class='modal-body'>
// //   <h3>Official Government Documents</h3>
// //   <p>Family Registry</p>
// //   <p>Birth Certificates</p>
// //   <p>Death Certificates</p>
// //   <p>Marriage Certificates</p>
// //   <h3>Government Information</h3>
// //   <p>Articles</p>
// //   <p>Newsletters</p>
// //   <p>placeholder</p>
// //   <p>placeholder</p>
// // </div>
