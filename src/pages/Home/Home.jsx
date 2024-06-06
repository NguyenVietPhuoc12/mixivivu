import { IoLocationOutline } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';

import './Home.scss';
import video from '~/assets/videos/Mixivivu.mp4';

const Home = () => {
    return (
        <section className="home-container">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop type="video/mp4"></video>

            <div className="home__content horizontal-spacer">
                <div className="home__content-detail">
                    <span className="home-text">Gói dịch vụ của chúng tôi</span>
                    <h1 className="home-title">Tìm kiếm kỳ nghỉ của bạn</h1>
                </div>
            </div>

            <div className="home-card grid horizontal-spacer">
                <div className="destination-input home__card-item">
                    <label htmlFor="city">Tìm kiếm điểm đến của bạn</label>
                    <div className="input-control flex">
                        <input type="text" placeholder="Enter your destination..." />
                        <IoLocationOutline className="icon" />
                    </div>
                </div>
                <div className="arrived__date-input home__card-item">
                    <label htmlFor="arrived-date">Lựa chọn ngày đến của bạn</label>
                    <div className="input-control flex">
                        <input type="date" />
                        <FaRegCalendarAlt className="icon" />
                    </div>
                </div>
                <div className="departure__date-input home__card-item">
                    <label htmlFor="departure-date">Lựa chọn ngày đi của bạn</label>
                    <div className="input-control flex">
                        <input type="date" />
                        <FaRegCalendarAlt className="icon" />
                    </div>
                </div>
                <div className="vehicle-input home__card-item">
                    <label htmlFor="vehicle">Lựa chọn phương tiện di chuyển</label>
                    <select name="vehicle" id="vehicle">
                        <option value="flight">Máy bay</option>
                        <option value="bus">Xe khách</option>
                        <option value="train">tàu hoả</option>
                        <option value="motobike">Xe máy</option>
                    </select>
                </div>
            </div>
        </section>
    );
};

export default Home;
