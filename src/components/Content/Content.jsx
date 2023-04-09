import contentCss from "./Content.module.css";

const Content = () => {
    return (
        <div className={contentCss.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
            </div>

            <div>
                ava + description
            </div>

            <div>
                My Posts
                <div>
                    New post
                </div>
                <div>
                    <div className={contentCss.item}>Post 1</div>
                    <div className={contentCss.item}>Post 2</div>
                    <div className={contentCss.item}>Post 3</div>
                    <div className={contentCss.item}>Post 4</div>
                </div>
            </div>
        </div>
    );
};

export default Content;