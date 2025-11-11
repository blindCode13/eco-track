import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight, FaGlobeAsia, FaLeaf, FaRecycle } from "react-icons/fa";
import ChallangesCard from "../components/ChallangesCard";
import TipsCard from "../components/TipsCard";
import EventsCard from "../components/EventsCard";
import useFetchedData from "../hooks/useFetchedData";
import LoadingState from "../components/LoadingState";

const Home = () => {
  const [sliderData, loadingS] = useFetchedData("/challanges", {params: {dataLimit: 8}});
  const [challangesData, loadingC] = useFetchedData("/challanges", {params: {dataLimit: 6}});
  const [tipsData, loadingT] = useFetchedData("/tips", {params: {dataLimit: 5}});
  const [eventsData, loadingE] = useFetchedData("/events", {params: {dataLimit: 4}});
  return (
    <div>
      {
        loadingS && <LoadingState></LoadingState>
      }
      <div className="relative w-full global-p-x mx-auto overflow-hidden">
        <button className="swiper-button-prev absolute scale-70 md:scale-100 md:translate-x-[160%] translate-x-[60%] bg-white p-2 rounded-full shadow z-10">
          <FaArrowLeft size={28} color="var(--primary-color)" />
        </button>
        <button className="swiper-button-next absolute scale-70 md:scale-100 md:-translate-x-[160%] -translate-x-[60%] bg-white p-2 rounded-full shadow z-10">
          <FaArrowRight size={28} color="var(--primary-color)" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            bulletActiveClass:
              "swiper-pagination-bullet-active custom-bullet-active",
          }}
          allowTouchMove={true}
          speed={600}
        >
          {
            !loadingS && sliderData.map(item => <SwiperSlide><SliderCards data={item}></SliderCards></SwiperSlide>)
          }
          
        </Swiper>
      </div>

      <section className="py-10 global-p-x">
        <div className="mx-auto mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Live Community Impact
          </h2>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
            <div className="bg-white rounded-xl p-12 w-full hover:scale-[1.02] transition border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-green-600">12,480 kg</h3>
              <p className="text-gray-700 mt-2 font-medium">
                Plastic Waste Reduced
              </p>
            </div>

            <div className="bg-white rounded-xl p-12 w-full hover:scale-[1.02] transition border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-green-600">8,950 kg</h3>
              <p className="text-gray-700 mt-2 font-medium">
                CO₂ Emissions Saved
              </p>
            </div>

            <div className="bg-white rounded-xl p-12 w-full hover:scale-[1.02] transition border-2 border-gray-200">
              <h3 className="text-3xl font-bold text-green-600">3,120</h3>
              <p className="text-gray-700 mt-2 font-medium">Trees Planted</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-16">
          <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">
            Active Challanges
          </h2>
            {
              loadingC && <div className="py-12 w-full"><LoadingState></LoadingState></div>
            }
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {
              !loadingC && challangesData.map(item => <ChallangesCard data={item} key={item._id}></ChallangesCard>)
            }
          </div>
          <button className="primary-btn mt-12">View All Challanges</button>
        </div>

        <div className="flex flex-col items-center mt-16">
          <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">
            Recent Tips
          </h2>
            {
              loadingT && <div className="py-12 w-full"><LoadingState></LoadingState></div>
            }
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {
              !loadingT && tipsData.map(item => <TipsCard data={item} key={item._id}></TipsCard>)
            }
          </div>
          <button className="primary-btn mt-12">View All Tips</button>
        </div>

        <div className="flex flex-col items-center mt-16">
          <h2 className="text-2xl text-center md:text-3xl font-bold text-gray-800 mb-8">
            Upcoming Events
          </h2>
            {
              loadingE && <div className="py-12 w-full"><LoadingState></LoadingState></div>
            }
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {
              !loadingE && eventsData.map(item => <EventsCard data={item} key={item._id}></EventsCard>)
            }
          </div>
          <button className="primary-btn mt-12">View All Events</button>
        </div>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Why Go Green?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Living sustainably isn’t just good for the planet — it improves
              health, builds stronger communities, and creates a future where
              both people and nature thrive together.
            </p>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <FaLeaf className="text-(--primary-color) text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Protect the Environment
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Reduce pollution, conserve natural resources, and keep
                  ecosystems healthy for generations to come.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <FaRecycle className="text-(--primary-color) text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Reduce Waste
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Make conscious choices that limit single-use plastics and
                  promote recycling and reusability in daily life.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-center items-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
                  <FaGlobeAsia className="text-(--primary-color) text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Strengthen Communities
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  Sustainable living fosters cleaner neighborhoods, local
                  collaboration, and a shared sense of responsibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white mx-auto px-8 rounded-xl py-20 border-2 border-gray-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start md:items-center gap-12">
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 mb-6 max-w-md">
                EcoTrack helps you turn simple actions into meaningful impact.
                Follow these steps to start living sustainably and track your
                journey toward a greener future.
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-6 w-full items-center">
              <div className="flex items-center md:flex-row w-fit flex-col gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center justify-center bg-(--primary-color) text-white font-bold text-lg w-12 h-12 rounded-full">
                  01
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Join a Challenge
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-[260px]">
                    Pick a sustainability challenge that inspires you — from
                    reducing plastic use to conserving energy.
                  </p>
                </div>
              </div>

              <div className="flex items-center md:flex-row w-fit flex-col gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center justify-center bg-(--primary-color) text-white font-bold text-lg w-12 h-12 rounded-full">
                  02
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Track Your Progress
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-[260px]">
                    Log your daily eco-actions and see your personal and
                    community impact grow over time.
                  </p>
                </div>
              </div>

              <div className="flex items-center md:flex-row w-fit flex-col gap-4 bg-gray-50 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center justify-center bg-(--primary-color) text-white font-bold text-lg w-12 h-12 rounded-full">
                  03
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Share Tips & Inspire
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-[260px]">
                    Exchange ideas, celebrate milestones, and motivate others in
                    the EcoTrack community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

const SliderCards = ({data}) => {
  return (
    <div className="relative">
      <div className="mx-auto w-full lg:w-3/5 rounded-3xl overflow-hidden relative">
        <div className="absolute top-0 w-full h-full bg-[#6d6d6d6b] backdrop-blur-xl"></div>
        <img src={data.imageUrl} className="w-full aspect-video"/>
      </div>
      
      <div className="absolute flex flex-col items-center justify-center w-full h-full top-0 scale-[0.6] md:scale-100">
        <h1 className="text-4xl md:text-6xl text-white mb-4">{data.title}</h1>
        <p className="text-white max-w-[400px] text-center">{data.description}</p>
        <button className="primary-btn mt-6">View Challange</button>
      </div>
    </div>
  );
};

export default Home;
