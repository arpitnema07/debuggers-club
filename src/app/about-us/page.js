import React from "react";

const page = () => {
  let message = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. `;
  return (
    <section className="section-1">
      <div className="contiainer">
        <div className="row">
          <div className="col-1">
            <h2 className="section-title">The Team Behind EduSyncSquade</h2>

            <p className="section-subtitle">{message}</p>
          </div>
          <div className="col-2">
            <div className="team-item">
              <img src="" className="t-img" alt="" />
              <h3>Swati Kanathe</h3>
              <div className="team-info">
                <p>Arpita heas of Eduscynsquade.</p>
                <p>lore10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
