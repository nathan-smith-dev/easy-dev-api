DROP FUNCTION IF EXISTS create_user(VARCHAR(21), VARCHAR(256), VARCHAR(35), VARCHAR(35));
CREATE FUNCTION create_user(id VARCHAR(21), email VARCHAR(256), first_name VARCHAR(35), last_name VARCHAR(35))
RETURNS users AS 
$BODY$
DECLARE usr users;
BEGIN
	INSERT INTO users(id, email, first_name, last_name)
	VALUES(id, email, first_name, last_name)
	RETURNING * INTO usr;

	RETURN usr;
END;
$BODY$
LANGUAGE PLPGSQL;

DROP FUNCTION IF EXISTS get_user(VARCHAR(21));
CREATE FUNCTION get_user(usrId VARCHAR(21))
RETURNS users AS
$BODY$
DECLARE usr users;
BEGIN 
	SELECT u.id, u.email, u.first_name, u.last_name, u.last_login INTO usr
	FROM users u
	WHERE u.id = usrId;

	RETURN usr;
END; 
$BODY$
LANGUAGE PLPGSQL;
