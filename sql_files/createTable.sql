# Create the schema if necessary.
CREATE SCHEMA IF NOT EXISTS ProjectFIFA;
USE ProjectFIFA;


DROP TABLE IF EXISTS Diving;
DROP TABLE IF EXISTS Handling;
DROP TABLE IF EXISTS Speed;
DROP TABLE IF EXISTS Reflexes;
DROP TABLE IF EXISTS Kicking;
DROP TABLE IF EXISTS Positioning;
DROP TABLE IF EXISTS Pace;
DROP TABLE IF EXISTS Shooting;
DROP TABLE IF EXISTS Passing;
DROP TABLE IF EXISTS Dribbling;
DROP TABLE IF EXISTS Physicality;
DROP TABLE IF EXISTS Defending;
DROP TABLE IF EXISTS PositionScore;
DROP TABLE IF EXISTS NonGKStat;
DROP TABLE IF EXISTS GKStat;
DROP TABLE IF EXISTS Stat;
DROP TABLE IF EXISTS Formation;
-- DROP TABLE IF EXISTS Player_Squad_Junction;
DROP TABLE IF EXISTS Squad;
DROP TABLE IF EXISTS Player;

# create tables
CREATE TABLE Squad (
  SquadID BIGINT AUTO_INCREMENT,
  FormationID INT,
  PlayerID1 INT,
  PlayerID2 INT,
  PlayerID3 INT,
  PlayerID4 INT,
  PlayerID5 INT,
  PlayerID6 INT,
  PlayerID7 INT,
  PlayerID8 INT,
  PlayerID9 INT,
  PlayerID10 INT,
  PlayerID11 INT,
  Chemisty INT,
  CONSTRAINT pk_Squad_SquadID PRIMARY KEY(SquadID)
);

#SET @POSITIONENUM := ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK');

CREATE TABLE Formation (
  FormationID INT AUTO_INCREMENT,
  FormationName VARCHAR(255),
  SquadID INT,
  Pos1 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos2 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos3 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos4 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos5 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos6 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos7 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos8 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos9 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos10 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  Pos11 ENUM('RS','RW','RF','RAM','RCM','RM','RDM','RCB','RB','RWB','ST','LW','CF','CAM','CM','LM','CDM','CB','LB','LWB','LS','LF','LAM','LCM','LDM','LCB','GK'),
  CONSTRAINT pk_Formation_FormationID PRIMARY KEY (FormationID)
 # CONSTRAINT fk_Formation_SquadID FOREIGN KEY (SquadID)
 #   REFERENCES Squad(SquadID)
 #   ON UPDATE CASCADE ON DELETE SET NULL
 );

CREATE TABLE Player(
  PlayerID BIGINT,
  PlayerName VARCHAR(255),
  Nation VARCHAR(255),
  Club VARCHAR(255),
  League VARCHAR(255),
  Skills INT,
  WeakFoot INT,
  Height INT,
  Weight INT,
  Age INT,
  Photo VARCHAR(255),
  Overall INT,
  StatID INT DEFAULT NULL,
  PositionScoreID INT,
  CONSTRAINT pk_Player_PlayerID PRIMARY KEY (PlayerID)
);

-- CREATE TABLE Player_Squad_Junction (
--   PlayerID INT,
--   SquadID INT,
--   CONSTRAINT pk_Player_Sauad PRIMARY KEY (PlayerID, SquadID),
--   CONSTRAINT fk_Player FOREIGN KEY (PlayerID) 
--     REFERENCES Player (PlayerID),
--   CONSTRAINT fk_Squad  FOREIGN KEY (SquadID) REFERENCES Squad (SquadID)
-- );

CREATE TABLE Stat (
  StatID BIGINT AUTO_INCREMENT,
  Overall INT,
  PlayerID BIGINT,
  CONSTRAINT pk_Stat_StatID PRIMARY KEY (StatID),
  CONSTRAINT fk_Stat_PlayerID FOREIGN KEY (PlayerID)
    REFERENCES Player (PlayerID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE GKStat (
  StatID BIGINT AUTO_INCREMENT,
  DivingID INT,
  HandlingID INT,
  ReflexsID INT,
  SpeedID INT,
  KickingID INT,
  PositioningID INT,
  CONSTRAINT pk_GKStat_StatID PRIMARY KEY (StatID),
  CONSTRAINT fk_GKStat_StatID FOREIGN KEY (StatID)
    REFERENCES Stat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE NonGKStat (
  StatID BIGINT AUTO_INCREMENT,
  PaceID INT,
  DribblingID INT,
  ShootingID INT,
  DefendingID INT,
  PhysicalityID INT,
  PassingID INT,
  #PositionScoreID INT,
  CONSTRAINT pk_NonGKStat_StatID PRIMARY KEY (StatID),
  CONSTRAINT fk_NonGKStat_StatID FOREIGN KEY (StatID)
    REFERENCES Stat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Diving (
  DivingID INT AUTO_INCREMENT,
  Acceleration INT,
  SprintSpeed INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Diving_DivingID PRIMARY KEY (DivingID),
  CONSTRAINT fk_Diving_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Handling (
  HandlingID INT AUTO_INCREMENT,
  Positioning INT,
  Finishing INT,
  ShotPower INT,
  LongShots INT,
  Volleys INT,
  Penalities INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Handling_HandlingID PRIMARY KEY (HandlingID),
  CONSTRAINT fk_Handling_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat (StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Speed (
  SpeedID INT AUTO_INCREMENT,
  Interceptions INT,
  HeadingAccuracy INT,
  Marking INT,
  StandingTackle INT,
  SlidingTackle INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Speed_SpeedID PRIMARY KEY (SpeedID),
  CONSTRAINT fk_Speed_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Reflexes (
  ReflexesID INT AUTO_INCREMENT,
  Agility INT,
  Balance INT,
  Reactions INT,
  BallControl INT,
  Dribbling INT,
  Composure INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Reflexes_ReflexesID PRIMARY KEY (ReflexesID),
  CONSTRAINT fk_Reflexes_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Kicking (
  KickingID INT AUTO_INCREMENT,
  Vision INT,
  Crossing INT,
  FreeKickAccuracy INT,
  ShortPassing INT,
  LongPassing INT,
  Curve INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Kicking_ReflexesID PRIMARY KEY (KickingID),
  CONSTRAINT fk_Kicking_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Positioning (
  PositioningID INT AUTO_INCREMENT,
  Jumping INT,
  Stamina INT,
  Strength INT,
  Aggression INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Positioning_PositioningID PRIMARY KEY (PositioningID),
  CONSTRAINT fk_Positioning_StatID FOREIGN KEY (StatID)
    REFERENCES GKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Pace (
  PaceID INT AUTO_INCREMENT,
  Acceleration INT,
  SprintSpeed INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Pace_PaceID PRIMARY KEY (PaceID),
  CONSTRAINT fk_Pace_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Shooting (
  ShootingID INT AUTO_INCREMENT,
  Positioning INT,
  Finishing INT,
  ShotPower INT,
  LongShots INT,
  Volleys INT,
  Penalities INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Shooting_ShootingID PRIMARY KEY (ShootingID),
  CONSTRAINT fk_Shooting_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Passing (
  PassingID INT AUTO_INCREMENT,
  Vision INT,
  Crossing INT,
  FreeKickAccuracy INT,
  ShortPassing INT,
  LongPassing INT,
  Curve INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Passing_PassingID PRIMARY KEY (PassingID),
  CONSTRAINT fk_Passing_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Dribbling (
  DribblingID INT AUTO_INCREMENT,
  Agility INT,
  Balance INT,
  Reactions INT,
  BallControl INT,
  Dribbling INT,
  Composure INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Dribbling_DribblingID PRIMARY KEY (DribblingID),
  CONSTRAINT fk_Dribbling_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Physicality (
  PhysicalityID INT AUTO_INCREMENT,
  Jumping INT,
  Stamina INT,
  Strength INT,
  Aggression INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Physicality_PhysicalityID PRIMARY KEY (PhysicalityID),
  CONSTRAINT fk_Physicality_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE Defending (
  DefendingID INT AUTO_INCREMENT,
  Interceptions INT,
  HeadingAccuracy INT,
  Marking INT,
  StandingTackle INT,
  SlidingTackle INT,
  Overall INT,
  StatID BIGINT,
  CONSTRAINT pk_Defending_DefendingID PRIMARY KEY (DefendingID),
  CONSTRAINT fk_Defending_StatID FOREIGN KEY (StatID)
    REFERENCES NonGKStat(StatID)
    ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE PositionScore (
  PositionScoreID INT AUTO_INCREMENT,
  RS INT,
  RW INT,
  RF INT,
  RAM INT,
  RCM INT,
  RM INT,
  RDM INT,
  RCB INT,
  RB INT,
  RWB INT,
  ST INT,
  LW INT,
  CF INT,
  CAM INT,
  CM INT,
  LM INT,
  CDM INT,
  CB INT,
  LB INT,
  LWB INT,
  LS INT,
  LF INT,
  LAM INT,
  LCM INT,
  LDM INT,
  LCB INT,
  #non_gk player do not have gk score
  GK INT,
  #StatID BIGINT,
  PlayerID BIGINT,
  CONSTRAINT pk_PositionScore_PositionScoreID PRIMARY KEY (PositionScoreID),
  -- CONSTRAINT fk_PositionScore_StatID FOREIGN KEY (StatID)
--     REFERENCES NonGKStat(StatID)
--     ON UPDATE CASCADE ON DELETE CASCADE
  CONSTRAINT fk_PositionScore_PlayerID FOREIGN KEY(PlayerID)
    REFERENCES Player(PlayerID)
    ON UPDATE CASCADE ON DELETE CASCADE
);
