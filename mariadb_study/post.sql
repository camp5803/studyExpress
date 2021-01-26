CREATE table board(
    post_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    id INT NOT NULL,
    permit VARCHAR(6) NOT NULL DEFAULT "USER",
    post_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    view INT NOT NULL DEFAULT 0,
    CONSTRAINT fid_board FOREIGN KEY(id) REFERENCES node_account.user_basic(id),
    CONSTRAINT pid_board PRIMARY KEY(post_id, id)
)
COMMENT = "for board",
DEFAULT CHARSET=utf8,
ENGINE = InnoDB;

CREATE table comment(
    comment_id INT NOT NULL AUTO_INCREMENT,
    post_id INT NOT NULL,
    id INT NOT NULL,
    content TEXT NOT NULL,
    comment_date DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    upper_comment INT,
    CONSTRAINT fid_comment FOREIGN KEY(id) REFERENCES board(id),
    CONSTRAINT pid_comment PRIMARY KEY(comment_id, id, post_id)
)
COMMENT = "for board's comment",
DEFAULT CHARSET=utf8,
ENGINE = InnoDB;

// comment_id는 어떻게 해야 할 것인가
// NEED PERMIT
// Writer, Admin, User
// id는 back-end에서 받아올 것