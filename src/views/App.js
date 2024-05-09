
import './App.scss';

export default function App() {
  return(
    <div className="h-screen w-full bg-[#E6EFFA] flex items-center justify-center">
      <div className='w-[36rem] bg-white rounded-lg p-12 flex gap-x-4'>
        <img 
        src= "https://scontent.fsgn10-2.fna.fbcdn.net/v/t39.30808-6/411923401_901776651666223_122522472520574783_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3IRWxDe2NacQ7kNvgGG3_FU&_nc_ht=scontent.fsgn10-2.fna&oh=00_AfBhloPrqdyC6L8G8govE4wV2MAuJ7EuxCBvkFEQGbWWDg&oe=66412D1A" 
        className='w-32 rounded-full border-[11px] border-[#E6EFFA] self-start'
        alt= ""/>
        <div className='space-y-7 text-[#1C2B62]'>
          <div>
            <h1 className='text-3xl font-bold'>Do Minh Hieu</h1>
            <h2 className='mt-1'>Fuck boy</h2>
          </div>
          
          <div className='space-y-4'>
            <p className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              4.7 Ratings
            </p>

            <p className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              4,447 Reviews
            </p>

            <p className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline-block mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
              </svg>

              478 Girls
            </p>
          </div>

          <p>
            Justin la sinh vien truong dai hoc FPT
          </p>

          <button className='rounded-md border-2 border-[#C4CADF] p-2'>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
}