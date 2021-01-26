CREATE table user_option(
    id INT NOT NULL AUTO_INCREMENT,
    married BOOLEAN,
    phone_option VARCHAR(13),
    home_addr VARCHAR(256),
    class_of TINYINT UNSIGNED,
    army BOOLEAN,
    army_disc DATE,
    CONSTRAINT fid_option FOREIGN KEY(id) REFERENCES process_data(id) ON DELETE CASCADE,
    CONSTRAINT pid_option PRIMARY KEY(id)
)
COMMENT = "user's option information for signup",
DEFAULT CHARSET=utf8,
ENGINE=InnoDB;

CREATE table process_data(
    id INT NOT NULL AUTO_INCREMENT,
    birth DATE NOT NULL,
    army BOOLEAN,
    army_disc DATE,
    CONSTRAINT fid_process FOREIGN KEY(id) REFERENCES user_basic(id) ON DELETE CASCADE,
    CONSTRAINT pid_process PRIMARY KEY(id)
)
COMMENT = "data for processing in back-end",
DEFAULT CHARSET=utf8,
ENGINE=InnoDB;

CREATE table user_basic (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(20) NOT NULL,
    passwd VARCHAR(32) NOT NULL,
    name VARCHAR(10) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    sex VARCHAR(6) NOT NULL,
    age TINYINT UNSIGNED NOT NULL,
    phonenum VARCHAR(13) NOT NULL,
    birth DATE NOT NULL,
    PRIMARY KEY(id),
    UNIQUE INDEX uname (name ASC),
    UNIQUE INDEX uemail (email ASC))
COMMENT = 'user information for signup',
DEFAULT CHARSET=utf8,
ENGINE=InnoDB;