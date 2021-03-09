import axios from  "axios";

const KEY ='AIzaSyBBFHpWt5T28sktcB17RGE0wZGv5a2iIZM';

export default axios.create({
    baseURL:' https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
}
)