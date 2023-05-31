import React from 'react';
import img from "../../assets/images/client.png";

function Reviews() {
    const reviews = [
        { user: img, userName: "Cody Fisher", date: "May 20, 2021", content: "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little." },
        { user: "../../assets/images/client.png", userName: "Cody Fisher", date: "May 20, 2021", content: "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little." },
        { user: "../../assets/images/client.png", userName: "Cody Fisher", date: "May 20, 2021", content: "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little." },
        { user: "../../assets/images/client.png", userName: "Cody Fisher", date: "May 20, 2021", content: "Very nice feeling sweater. I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little." },
    ]
    return (
        <div>
            {
                reviews.map(review => {
                    return (
                        <div>
                            <img src={review.user} alt="" />
                            <p>{review.userName}</p>
                            <span>{review.date}</span>
                            <span>
                                {review.content}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Reviews