CREATE DEFINER=`root`@`localhost` PROCEDURE `GET_EXAM10`()
BEGIN
	CREATE OR REPLACE VIEW EXAM10_VIEW AS
    SELECT EM.ENAME AS 'EMPLOYEE', EM.HIREDATE AS 'EMPHIREDATE', MG.ENAME AS 'MANAGER', MG.HIREDATE AS 'MGRHIREDATE'
	FROM EMP EM LEFT OUTER JOIN EMP MG  ON (EM.MGR = MG.EMPNO)
	WHERE MG.HIREDATE > EM.HIREDATE;
END