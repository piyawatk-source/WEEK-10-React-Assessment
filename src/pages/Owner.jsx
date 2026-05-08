import profileImg from "../assets/profile.jpg";

function Owner() {
  return (
    <div className="page">
      <h1>25 Piyawat Kamton (โคะ) - JSD12</h1>

      <div className="owner-image">
        <img src={profileImg} alt="PiyawatK" />
      </div>

      <div className="bio">
        <h3>Short Biography:</h3>
        <p>
          สวัสดีครับ ผมชื่อ ปิยวัฒน์ คำตน เป็นนักเรียนใน Generation Thailand
          กำลังศึกษาในหลักสูตร Junior Software Developer
          ครอบคลุมการพัฒนาทั้งฝั่ง Frontend และ Backend รวมถึงการจัดการฐานข้อมูล
          โดยมีเป้าหมายเพื่อก้าวสู่อาชีพ Full Stack Developer มืออาชีพครับ
        </p>
      </div>
    </div>
  );
}

export default Owner;
