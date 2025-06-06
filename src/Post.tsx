import './Post.css';
import like from './assets/like.png';
import repost from './assets/repost.png';
import reply from './assets/reply.png';
import shoot from './assets/shoot.png';
import checkmark1 from './assets/checkmark_normal.png';
import checkmark2 from './assets/checkmark_special.png';

interface PostProps {
    account: string;
    username: string;
    text: string;
    pfp: string;
    verified1: boolean;
    verified2: boolean;
    likes: string;
    reposts: string;
    replies: string;
    continues: boolean;
    image?: string
}

function Post(props : PostProps) {
    return (
        <div className='post'>
            <div className='post-left'>
                <img src={props.pfp} />
                {props.continues && <div className='connector'></div>}
            </div>
            <div className='post-right'>
                <div className='header'>
                    <p>{props.username}</p>
                    <p>@{props.account}</p>
                    {props.verified1 && <img src={checkmark1} />}
                    {props.verified2 && <img src={checkmark2} />}
                </div>
                <div className='body'>
                    <p dangerouslySetInnerHTML={{__html: props.text.replace(/\B(\#[a-zA-Z]+\b)(?!;)/,'<span style="color: #3b8fce;">$1</span>')}}/>
                    {props.image && <img src={"/public/attachments/"+props.image} />}
                </div>
                <div className='options'>
                    <div className='like'>
                        <img src={like} />
                        {props.likes != '' && <p>{props.likes}</p>}
                    </div>
                    <div className='repost'>
                        <img src={repost} />
                        {props.reposts != '' && <p>{props.reposts}</p>}
                    </div>
                    <div className='reply'>
                        <img src={reply} />
                        {props.replies != '' && <p>{props.replies}</p>}
                    </div>
                    <div className='shoot'>
                        <img src={shoot} />
                    </div>
                </div>
            </div>
        </div>
    )
}

Post.defaultProps = {
    verified1: false,
    verified2: false,
    continues: false
}

export default Post;