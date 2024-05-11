
import './App.scss';

export default function App() {
  return(
    <div className='h-screen w-full bg-[#E6EFFA] flex items-center justify-center'>
      <div className="w-[50rem] bg-white p-12">
        <div className=" text-black text-[4rem] font-bold font-['Quicksand'] text-center pb-4">Đăng Nhập</div>
        
        <div className='flex w-full mb-10'>
          <div className='w-[50%]'>
            <div className="text-center text-black text-[40px] font-normal font-['Quicksand'] ">Số Điện Thoại</div>
            <div className="w-full h-[7px] bg-zinc-300 rounded-[15px]" />
          </div>
          <div className='w-[50%]'>
            <div className="text-center text-black text-[40px] font-normal font-['Quicksand']">Email</div>
            <div className="w-50% h-[7px] left-[1061px] top-[216px]  bg-red-600 rounded-[15px]" />
          </div>
        </div>
        
        <div className='Tai khoan'>
          <input 
            className="w-[636px] h-[89px]  bg-white rounded-[40px] border border-stone-600" 
            type='text'/>
        </div>
        <div className="w-[636px] h-[89px] left-[733px] top-[431px]  bg-white rounded-[40px] border border-stone-600" />
        <div className="w-[636px] h-[89px] left-[733px] top-[578px]  bg-gradient-to-r from-sky-800 to-fuchsia-700 rounded-[40px] border border-stone-600" />
        <div className="w-[280px] h-[34px] text-stone-400 text-3xl font-normal font-['Quicksand']">Email của bạn</div>
        <div className="w-[280px] h-[34px] left-[758px] top-[456px]  text-stone-400 text-3xl font-normal font-['Quicksand']">Mật Khẩu</div>
        <div className="w-[37px] h-[41px] left-[1306px] top-[456px] " />
        <div className="w-[202px] h-[43px] left-[970px] top-[606px]  text-white text-3xl font-bold font-['Quicksand']">Đăng Nhập</div>
        <div className="w-[279px] h-[35px] left-[807px] top-[686px]  text-stone-700 text-xl font-normal font-['Quicksand']">Ghi nhớ mật khẩu</div>
        <div className="w-[482px] h-[38px] left-[826px] top-[889px] "><span className="text-black text-3xl font-bold font-['Quicksand']">Bạn chưa có tài khoản? </span><span className="text-red-700 text-3xl font-bold font-['Quicksand']">Đăng ký</span></div>
        <div className="w-[69px] h-[30px] left-[1025px] top-[768px]  text-black text-[25px] font-bold font-['Quicksand']">Hoặc</div>
        <div className="w-[279px] h-[35px] left-[1148px] top-[684px]  text-stone-700 text-xl font-normal font-['Quicksand']">Quên mật khẩu</div>
        <div className="w-3 h-3 left-[791px] top-[694px] border border-black" />
        <div className='flex items-center '>
          <div className="w-[206px] h-[0px] border border-black"></div>
          <div className="w-[206px] h-[0px] border border-black"></div>
          <img className="w-[74px] h-[52px] bsolute" src="https://via.placeholder.com/74x52" alt=''/>
          <img className="w-[67px] h-[39px] " src="https://www.israelhayom.co.il/wp-content/uploads/2022/02/15759806620578_b.png" alt=''/>
        </div>
      </div>
    </div>
    // <div className="bg-white flex flex-row justify-center w-full">
    //   <div className="bg-white overflow-hidden w-[1440px] h-[1024px] relative">
    //     <img className="absolute w-[622px] h-[1024px] top-0 left-0 object-cover" alt="Vector" src="https://th.bing.com/th/id/OIP.eXSJ-yGbO9kJDs6dKdFwGAHaDD?rs=1&pid=ImgDetMain" />
    //     <div className="absolute w-[373px] top-[47px] left-[909px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-black text-[50px] tracking-[0] leading-[normal]">
    //       Đăng Nhập
    //     </div>
    //     <div className="absolute w-[789px] h-[95px] top-[146px] left-[746px]">
    //       <div className="absolute w-[373px] top-[5px] left-[8px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
    //         Số Điện Thoại
    //       </div>
    //       <div className="absolute w-[373px] top-0 left-[416px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[normal]">
    //         Email
    //       </div>
    //       <div className="absolute w-[319px] h-[7px] top-[70px] left-0 bg-[#d9d9d9] rounded-[15px]" />
    //       <div className="absolute w-[319px] h-[7px] top-[70px] left-[315px] bg-[#ff0000] rounded-[15px]" />
    //     </div>
    //     <div className="absolute w-[636px] h-[89px] top-[285px] left-[733px] bg-white rounded-[40px] border border-solid border-[#565151]">
    //       <div className="absolute w-[280px] top-[27px] left-[24px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#a79c9c] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
    //         Email của bạn
    //       </div>
    //     </div>
    //     <div className="absolute w-[636px] h-[89px] top-[578px] left-[733px] rounded-[40px] border border-solid border-[#565151] [background:linear-gradient(180deg,rgba(0,103.68,126.44,0.79)_0%,rgba(164.66,17.46,167.66,0.79)_57.34%)]">
    //       <div className="absolute w-[202px] top-[26px] left-[236px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-white text-[30px] tracking-[0] leading-[normal]">
    //         Đăng Nhập
    //       </div>
    //     </div>
    //     <div className="absolute w-[636px] h-[89px] top-[431px] left-[733px] bg-white rounded-[40px] border border-solid border-[#565151]">
    //       <div className="absolute w-[280px] top-[23px] left-[24px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#a79c9c] text-[30px] tracking-[0] leading-[normal] whitespace-nowrap">
    //         Mật Khẩu
    //       </div>
    //       <img className="absolute w-[37px] h-[41px] top-[24px] left-[572px]" alt="Frame" src="frame.svg" />
    //     </div>
    //     <div className="absolute w-[279px] top-[685px] left-[807px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#474040] text-[20px] tracking-[0] leading-[normal]">
    //       Ghi nhớ mật khẩu
    //     </div>
    //     <p className="absolute w-[482px] top-[888px] left-[826px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-transparent text-[30px] tracking-[0] leading-[normal]">
    //       <span className="text-black">Bạn chưa có tài khoản? </span>
    //       <span className="text-[#b01919]">Đăng ký</span>
    //     </p>
    //     <div className="absolute w-[69px] top-[767px] left-[1025px] [font-family:'Quicksand-Bold',Helvetica] font-bold text-black text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
    //       Hoặc
    //     </div>
    //     <div className="absolute w-[279px] top-[683px] left-[1148px] [font-family:'Quicksand-Regular',Helvetica] font-normal text-[#474040] text-[20px] tracking-[0] leading-[normal]">
    //       Quên mật khẩu
    //     </div>
    //     <div className="absolute w-[12px] h-[12px] top-[694px] left-[791px] border border-solid border-black" />
    //     <img className="left-[692px] absolute w-[206px] h-px top-[782px] object-cover" alt="Line" src="line-1.svg" />
    //     <img className="left-[1218px] absolute w-[206px] h-px top-[782px] object-cover" alt="Line" src="line-2.svg" />
    //     <img
    //       className="w-[74px] h-[52px] top-[768px] left-[1119px] absolute object-cover"
    //       alt="Image2"
    //       src="image-2.png"
    //     />
    //     <img
    //       className="w-[67px] h-[39px] top-[773px] left-[933px] absolute object-cover"
    //       alt="Image1"
    //       src="image-1.png"
    //     />
    //   </div>
    // </div>
  );
}