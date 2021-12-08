
<div className="art-div">
        <img src={artwork.image} alt={'alt'}/>
        <div className="art-info-div">
          <p className="art-show-title">
            <Link to={`profile/${artwork.owner.id}`}>{artwork.owner.username}</Link>
          </p>
          <p className="artDescription">{artwork.caption}</p>
          <p calssName="expand-button">expand icon</p>
        </div>
      </div>