import React from 'react';
import style from "../../styles/Product.module.css";
import boyBlog from "../../assets/images/boyBlog.png";
import imgUser from "../../assets/images/img5.png";
import imgGirl from "../../assets/images/img.png";
import boyImg from "../../assets/images/img2.png";


function ReviewsSection() {
    const reviews = [
        { user: boyBlog, userName: "Cody Fisher", date: "May 20, 2021", content: "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>, id: 1 },
        { user: imgUser, userName: "Stiven Hokinhs", date: "May 20, 2021", content: "I love the charcoal heavyweight hoodie. Still looks new after plenty of washes. If you’re unsure which hoodie to pick.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>, id: 2 },
        { user: imgGirl, userName: "Gropishta keo", date: "May 20, 2021", content: "The quality and sizing mentioned were accurate and really happy with the purchase. Such a cozy and comfortable hoodie. Now that it’s colder, my husband wears his all the time. I wear hoodies all the time.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>, id: 3 },
        { user: boyImg, userName: "Dahon Stiven", date: "May 20, 2021", content: "Before buying this, I didn't really know how I would tell a 'high quality' sweatshirt, but after opening, I was very impressed. The material is super soft and comfortable and the sweatshirt also has a good weight to it.", icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" /></svg>, id: 4 }
    ]
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-14 gap-8 mb-10'>
            {
                reviews.map((review, id) => {
                    return (
                        <div>
                            <div className={style.userProp} key={id}>
                                <div>
                                    <img src={review.user} alt="img" className={style.imgReview} />
                                    <div className={style.user}>
                                        <h6>{review.userName}</h6>
                                        <span>{review.date}</span>
                                    </div>
                                </div>
                                <div>
                                    {
                                        reviews.map((element, id) => {
                                            return (
                                                <button key={id}>
                                                    {element.icon}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <h6 className={style.contentUser}>
                                {review.content}
                            </h6>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ReviewsSection