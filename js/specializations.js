$(document).ready(function() {
  let specializations = [
    {
      title: 'Government',
      image: '../img/specs/scale.png',
      modal: '.government-modal',
      dynamicTitle: 'government'
    },
    {
      title: 'Business',
      image: '../img/specs/business.png',
      modal: '.business-modal',
      dynamicTitle: 'business'
    },
    {
      title: 'Technology',
      image: '../img/specs/laptop.png',
      modal: '.technology-modal',
      dynamicTitle: 'technology'
    }
  ];

  for (let i = 0; i < specializations.length; i++) {
    $('#dynamic-specializations').append(
      `
      <div class="col-md-4">
        <div class="skill-card">
          <a data-toggle='modal' data-target='${specializations[i].modal}'>
            <div class="skill-card-top">
              <img src="${specializations[i].image}" class="img-responsive">
            </div>
            <div class="skill-card-bottom">
              <div class="skill-card-title">
                <h2 id="specialization-title-${specializations[i].dynamicTitle}-d"></h2>
              </div>
            </div>
            <div class="overlayed-message">
              <h1 id="click-for-info-${specializations[i].dynamicTitle}-d"></h1>
            </div>
          </a>
        </div>
      </div>
      `
    );
  }
});
