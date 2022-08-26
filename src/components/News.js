import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types';


export class News extends Component {
    article = [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Four people killed in mass shooting at Tulsa hospital; gunman also dead - CBS News",
            "description": "The shooter died of an apparent self-inflicted gunshot wound, police said. One witness said, \"I just really couldn't believe it was happening in my own neck of the woods.\"",
            "url": "https://www.cbsnews.com/news/tulsa-shooting-saint-francis-hospital/",
            "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2022/06/02/611cb932-c840-43b0-869c-af56fd30fc23/thumbnail/1200x630/c4295185f1aa2813584fdfc273a96fa6/tulsa-shooting-2022-06-02t002310z.jpg",
            "publishedAt": "2022-06-02T06:32:00Z",
            "content": "Four people were killed in a shooting Wednesday evening in a medical building on a hospital campus in Tulsa, Oklahoma, police said. The gunman is also dead, of an apparent self-inflicted gunshot woun… [+3467 chars]"
        },
        {
            "source": {
                "id": "independent",
                "name": "Independent"
            },
            "author": "Gustaf Kilander",
            "title": "Johnny Depp’s star lawyer Camille Vasquez celebrates verdict: ‘What we have said from the beginning’ - The Independent",
            "description": "Depp legal team celebrated win with a group hug and emerged to cheers",
            "url": "https://www.independent.co.uk/news/world/americas/johnny-depp-verdict-lawyer-camille-vasquez-b2092451.html",
            "urlToImage": "https://static.independent.co.uk/2022/06/01/23/AFP_32BQ2AG.jpg?quality=75&width=1200&auto=webp",
            "publishedAt": "2022-06-02T05:08:47Z",
            "content": "Johnny Depps star lawyer Camille Vasquez is celebrating victory in a case that has catapulted her to fame. \r\nMs Vasquez, who quickly became a source of internet fascination in the trial, hugged her c… [+3174 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "TooFab"
            },
            "author": "Toofab Staff",
            "title": "Kim Kardashian Admits She Was 'DTF,' Reached Out to Pete Davidson Because of 'BDE' Rumors - TooFab",
            "description": "Kim finally reveals the whole story of how she ended up with the \"Saturday Night Live\" alum after the pair shared an on-screen kiss during her hosting stint.",
            "url": "https://toofab.com/2022/06/01/kim-kardashian-dtf-admits-bde-pete-davidson-rumors-why-she-reached-out/",
            "urlToImage": "https://images.toofab.com/image/8a/16by9/2022/06/02/8a8488c2724a4675a260617d7f481ebd_xl.jpg",
            "publishedAt": "2022-06-02T05:01:00Z",
            "content": "At first, Kim Kardashian was keeping her relationship with Pete Davidson on the downlow even while she was filming the first season of Hulu's new \"The Kardashians\" series. That all changed with this … [+4074 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Athletic"
            },
            "author": "Andy McCullough",
            "title": "Angels’ star Mike Trout laughs off questions about ‘legendary’ fantasy football league - The Athletic",
            "description": "NEW YORK — Mike Trout, the best player in baseball, the greatest of his generation, faced a bank of television cameras and a clutch of iPhone recorders. At long last, after 12 seasons, nine All-Star appearances and three MVP trophies, a blemish had emerged on…",
            "url": "https://theathletic.com/3344779/2022/06/01/mike-trout-commissionership-fantasy-football-league/",
            "urlToImage": "https://cdn.theathletic.com/app/uploads/2022/03/13165722/GettyImages-1337348202-1024x683.jpg",
            "publishedAt": "2022-06-02T04:56:49Z",
            "content": "NEW YORK Mike Trout, the best player in baseball, the greatest of his generation, faced a bank of television cameras and a clutch of iPhone recorders. At long last, after 12 seasons, nine All-Star ap… [+5024 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Sam Meredith",
            "title": "U.S. unveils $700 million military aid package for Ukraine; fighting rages in Donbas - CNBC",
            "description": "Ukraine's Volodymyr Zelenskyy has described the Russian bombing in the city of Sievierodonetsk as \"insanity\" given the presence of a chemical plant.",
            "url": "https://www.cnbc.com/2022/06/01/russia-ukraine-live-updates.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107064012-16529819312022-02-10t235040z_1965758351_rc29hs9eqpov_rtrmadp_0_ukraine-crisis-usa-aid.jpeg?v=1652981979&w=1920&h=1080",
            "publishedAt": "2022-06-02T04:47:00Z",
            "content": "Ukrainian President Volodymyr Zelensky reaffirmed that the situation in the eastern region of the Donbas is \"very difficult,\" saying Russian air strikes in Sievierodonetsk are \"insanity,\" given the p… [+767 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NBA Finals 2022: Ranking all 30 players in Celtics-Warriors; Stephen Curry, Jayson Tatum tough call at No. 1 - CBS Sports",
            "description": "Curry vs. Tatum is the toughest debate of the Finals",
            "url": "https://www.cbssports.com/nba/news/nba-finals-2022-ranking-all-30-players-in-celtics-warriors-stephen-curry-jayson-tatum-tough-call-at-no-1/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/01/e5c95a19-2d9a-435c-b91f-2b08ff7a4bbf/thumbnail/1200x675/6161a3b1d063b0cdd7aeb9e09be380a3/tatum-curry-us.jpg",
            "publishedAt": "2022-06-02T04:28:00Z",
            "content": "Pat Riley has a principle for the NBA's highest-leverage games. \"Use eight, rotate seven, play six, trust five.\" The difference between \"use,\" \"rotate,\" and \"play\" remains ambiguous to this day, but … [+14772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WISN Milwaukee"
            },
            "author": "WISN.com Staff",
            "title": "Hot air balloon crashes and hits train in Burlington - WISN Milwaukee",
            "description": "Officials: 2 victims airlifted from scene via Flight for Life",
            "url": "https://www.wisn.com/article/hot-air-balloon-crashes-hits-train/40171875",
            "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/sarah-elizabeth-0285-1654138670.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
            "publishedAt": "2022-06-02T03:24:00Z",
            "content": "BURLINGTON, Wis. —A hot air balloon crashed in Burlington, hitting a train, according to officials and witnesses.\r\nThe balloon went down on Calumet and Pine streets. According to witnesses, the ballo… [+504 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "A Race Against Time: Quick Engineering Saves NASA’s MAVEN Spacecraft - SciTechDaily",
            "description": "NASA’s MAVEN Spacecraft Resumes Science & Operations, Exits Safe Mode After three months in safe mode, NASA’s MAVEN spacecraft has finally returned to normal science and relay operations. The problem started back on February 22, 2022, when contact with the sp…",
            "url": "https://scitechdaily.com/a-race-against-time-quick-engineering-saves-nasas-maven-spacecraft/",
            "urlToImage": "https://scitechdaily.com/images/MAVEN-Mission-Identifies-Links-to-Atmospheric-Loss.jpg",
            "publishedAt": "2022-06-02T03:17:48Z",
            "content": "ByWillow Reed, University of Colorado BoulderJune 1, 2022\r\nNASAs Mars Atmosphere and Volatile Evolution (MAVEN) spacecraft is the first Mars orbiter specifically designed to study the planets upper a… [+8600 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "Kelsey Vlamis",
            "title": "Hundreds of Russian soldiers have deserted or refused to fight in Ukraine, compounding major losses in the war, report says - Yahoo News",
            "description": "\"So many people don't want to fight,\" a Russian lawyer representing soldiers who refused to fight in Ukraine told The Wall Street Journal.",
            "url": "https://www.businessinsider.com/hundreds-of-russian-soldiers-fled-refused-to-fight-ukraine-report-2022-6",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/vVu45R9mHEUqrgaM0q6wHA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://s.yimg.com/uu/api/res/1.2/h_J6juzKUrImEAmaCKwSeA--~B/aD0xMjYyO3c9MTY4MjthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/business_insider_articles_888/49189a3b4c9ab3726944f2a26ca9ff54",
            "publishedAt": "2022-06-02T02:29:25Z",
            "content": "Russian Spetsnaz troops march through Red Square in a Victory Day military parade, May 9, 2021.Mikhail Svetlov/Getty Images\r\n<ul><li>Russian troops have suffered major losses since invading Ukraine i… [+2287 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Zavier Ong",
            "title": "'Fallen angels': Morgan Stanley says buy the dip on these 5 global stocks - CNBC",
            "description": "Morgan Stanley sees opportunities for investors to pile into \"fallen angels\" — stocks which the bank thinks have sold off materially and now look attractive.",
            "url": "https://www.cnbc.com/2022/06/02/morgan-stanley-says-buy-the-dip-on-these-5-global-stocks.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106192376-1571639765203gettyimages-1090745214.jpeg?v=1603711328&w=1920&h=1080",
            "publishedAt": "2022-06-02T01:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Katie Lobosco, CNN",
            "title": "Biden administration cancels $5.8 billion in student loan debt for former Corinthian students - CNN",
            "description": "The Department of Education announced Wednesday that it will cancel $5.8 billion in student loan debt for 560,000 borrowers who attended the now-defunct network of for-profit schools known as Corinthian Colleges.",
            "url": "https://www.cnn.com/2022/06/01/politics/student-loan-cancellation-corinthian-for-profit/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220527183336-college-graduates-cap-file-051422-super-tease.jpg",
            "publishedAt": "2022-06-02T00:24:00Z",
            "content": "Washington (CNN)The Department of Education announced Wednesday that it will cancel $5.8 billion in student loan debt for 560,000 borrowers who attended the now-defunct network of for-profit schools … [+4633 chars]"
        },
        {
            "source": {
                "id": "bleacher-report",
                "name": "Bleacher Report"
            },
            "author": "Timothy Rapp",
            "title": "Dustin Johnson Reportedly Agreed to Contract Worth About $125M to Join LIV Series - Bleacher Report",
            "description": "Star golfer Dustin Johnson is reportedly being paid$125 million to join the Saudi-backed LIV Golf league, acc",
            "url": "https://bleacherreport.com/articles/10037403-dustin-johnson-reportedly-agreed-to-contract-worth-about-125m-to-join-liv-series",
            "urlToImage": "https://media.bleacherreport.com/image/upload/c_fill,g_faces,w_3800,h_3800,q_95/v1654113349/n7p32w0utyojodb4dyx0.jpg",
            "publishedAt": "2022-06-02T00:22:26Z",
            "content": "Maddie Meyer/PGA of America/PGA of America via Getty Images \r\nStar golfer Dustin Johnson was reportedly paid \"around\" $125 million to join the Saudi Arabia-backed LIV Golf league, according to James … [+3232 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Texas Tribune"
            },
            "author": "Alexa Ura",
            "title": "Irma and Joe Garcia, a teacher and her heartbroken husband, are buried together in Uvalde - The Texas Tribune",
            "description": "They were high school sweethearts. Irma Garcia taught at Robb Elementary for her entire 23-year career. Her husband died of a heart attack two days after she was shot.",
            "url": "https://www.texastribune.org/2022/06/01/garcia-funeral-uvalde-shooting/",
            "urlToImage": "https://thumbnails.texastribune.org/Iv71b9hXQW30A2OLQWBb2kY6HJE=/1200x630/filters:quality(95)/static.texastribune.org/media/files/94e99c55e35172e5f74833b06b23a803/Garcias%20Funeral%20KGB%20TT%2003.jpg",
            "publishedAt": "2022-06-01T23:59:46Z",
            "content": "UVALDE In the days following the school shooting at Robb Elementary, the streets of this small town were lined by sets of 21.\r\nThe 21 bows of gauzy ribbon tied to the thin posts of a black iron gate.… [+4690 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Nicole Sganga",
            "title": "Coast Guard Commandant Linda Fagan becomes first woman to lead U.S. armed forces branch - CBS News",
            "description": "The new commandant of the Coast Guard has worn its uniform for over 40 years on all seven continents.",
            "url": "https://www.cbsnews.com/news/linda-fagan-coast-guard-commandant-first-woman-lead-u-s-armed-forces-branch/",
            "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2022/06/01/f4f5c829-0ff2-40e4-8301-52bf48868553/thumbnail/1200x630/f8cae2f4f336c8d4733b1829c66e9dce/gettyimages-1241036243.jpg",
            "publishedAt": "2022-06-01T23:43:00Z",
            "content": "Admiral Linda L. Fagan shattered the military's glass ceiling on Wednesday to become commandant of the U.S. Coast Guard and the first female officer to lead a branch of the U.S. armed forces.\r\nPrevio… [+5931 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "‘This one hurts.’ Death of former Dallas Cowboys star Marion Barber hits hard - Fort Worth Star-Telegram",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMiTWh0dHBzOi8vd3d3LnN0YXItdGVsZWdyYW0uY29tL3Nwb3J0cy9uZmwvZGFsbGFzLWNvd2JveXMvYXJ0aWNsZTI2MjA0ODEwNy5odG1s0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-06-01T23:29:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "AL.com"
            },
            "author": "Mark Heim | mheim@al.com",
            "title": "LSU AD to Finebaum on Nick Saban-Jimbo Fisher feud: ‘Not going to get in between two hillbillies’ - AL.com",
            "description": "LSU AD came with a quip that surprised even Paul Finebaum.",
            "url": "https://www.al.com/alabamafootball/2022/06/scott-woodward-to-finebaum-on-nick-saban-jimbo-fisher-feud-not-going-to-get-inbetween-two-hillbillies.html",
            "urlToImage": "https://www.al.com/resizer/ekNoCazg7IHyUDqw8zjSf4iBlkI=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/J3EBX6KTAVCYVMA7L7MFXO3GAY.jpg",
            "publishedAt": "2022-06-01T22:46:00Z",
            "content": "By now, you may have noticed that those in Destin for the SEC spring meetings have stayed clear of commenting on the Nick Saban-Jimbo Fisher saga.\r\nEven Fisher said Wednesday he is moving on.\r\nPaul F… [+1065 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Johnny Depp PARTIES in London as Jury Reaches Verdict - Entertainment Tonight",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Db0BCYebRi7k",
            "urlToImage": null,
            "publishedAt": "2022-06-01T22:36:34Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "Page Six"
            },
            "author": "Bernie Zilio",
            "title": "New portrait of Queen Elizabeth II released ahead of her Platinum Jubilee - Page Six",
            "description": "The highly anticipated Platinum Jubilee celebration, which is set to kick off Thursday morning, marks Her Majesty’s 70th year on the throne.",
            "url": "https://pagesix.com/2022/06/01/queen-elizabeth-portrait-released-ahead-of-platinum-jubilee/",
            "urlToImage": "https://pagesix.com/wp-content/uploads/sites/3/2022/06/queen-elizabeth-new-portrait-2022.jpg?quality=75&strip=all&w=1200",
            "publishedAt": "2022-06-01T22:34:00Z",
            "content": "A beautiful new portrait of Queen Elizabeth II has been released ahead of her highly anticipated Platinum Jubilee.\r\nThe milestone snapshot, which debuted Wednesday on the Royal Familys Twitter page, … [+2361 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Meta Platforms' Sheryl Sandberg to leave after 14 years - Reuters",
            "description": "Meta Platforms Inc <a href=\"https://www.reuters.com/companies/FB.O\" target=\"_blank\">(FB.O)</a> Chief Operating Officer Sheryl Sandberg, whose close partnership with Chief Executive Officer Mark Zuckerberg powered the growth of the world's biggest social netwo…",
            "url": "https://www.reuters.com/technology/meta-platforms-operations-chief-sheryl-sandberg-quit-2022-06-01/",
            "urlToImage": "https://www.reuters.com/resizer/UeAsfpuZBB3YLnaLVHutFN64KSc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OLHAOZ33UVJO7D7LT6YJQTU7HM.jpg",
            "publishedAt": "2022-06-01T22:08:00Z",
            "content": "June 1 (Reuters) - Meta Platforms Inc (FB.O) Chief Operating Officer Sheryl Sandberg, whose close partnership with Chief Executive Officer Mark Zuckerberg powered the growth of the world's biggest so… [+4642 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Vulture"
            },
            "author": "Justin Curto",
            "title": "Matthew Morrison Fired From SYTYCD for Inappropriate Conduct - Vulture",
            "description": "He reportedly sent “flirty” messages to a female contestant.",
            "url": "http://www.vulture.com/2022/06/matthew-morrison-sytycd-inappropriate-flirting.html",
            "urlToImage": "https://pyxis.nymag.com/v1/imgs/453/c77/acce7f02df05793ceae8da886973f50acd-matthew-morrison.1x.rsocial.w1200.jpg",
            "publishedAt": "2022-06-01T22:07:18Z",
            "content": "When Matthew Morrison was fired midway through his first season judging So You Think You Can Dance in May, the actor chalked it up to disregarding competition production protocols, preventing me from… [+838 chars]"
        }
    ]
    static deafultProps={
        country:'in',
        pageSize:8,
        category:'general',
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string,

    }
    constructor() {
        super();
        console.log("hello i am a constructor from News Component");
        this.state = {
            articles: this.article,
            loading: false,
            page:1
        }

    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=add35535cbba4c8eb18766f8a2ad7815&page=1`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData); 
        this.setState({articles: parsedData.articles})               
    }
    handlePrevClick=async ()=>{
        console.log("Previous");
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=add35535cbba4c8eb18766f8a2ad7815&page=${this.state.page -1}&pageSize=5`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData); 
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles
        })               
    }
    handleNextClick=async()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=add35535cbba4c8eb18766f8a2ad7815&page=${this.state.page +1}&pageSize=5`;
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData); 
        this.setState({
            page:this.state.page + 1,
            articles: parsedData.articles
        })   
    }
    render() {
        return (
            <div className="container my-3">
                <h1>News-Alert:Top headlines</h1>
                <div className="row">
                    {this.state.articles.map((element => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):" "} imageUrl={element.urlToImage} url={element.url} />
                        </div>
                    }))}
                    <div className="conatiner d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&laquo; Previous</button>

                    <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &raquo;</button>

                    </div>

                    

                </div>
            </div>





        )
    }
}

export default News