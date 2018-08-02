Use ProjectFIFA;

# Load data into Player

LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/complete1.csv'
  INTO TABLE Player
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID)
  SET PlayerID=@ID,
          PlayerName=@name, 
          Nation=@nationality, 
          Club=@club, 
          League=@league,
          Skills=@skill_moves,
          WeakFoot=@weak_foot,
          Height=@height_cm,
          Weight=@weight_kg,
          Age=@age,
          Photo=@photo,
          Overall=@overall,
          StatID=@StatID,
          PositionScoreID=@PositionScoreID;

# load Stat
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/complete1.csv'
  INTO TABLE Stat
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID)
  SET StatID=@StatID,
          Overall=@overall, 
          PlayerID=@ID;
          
# load GkStat
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE GKStat
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET StatID= @StatID,
		  DivingID =@DivingID,
		  HandlingID= @HandlingID,
		  ReflexsID =@ReflexesID,
  		  SpeedID =@SpeedID,
  		  KickingID =@KickingID,
  		  PositioningID= @PosioningID;
          
# load NonGkStat
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE NonGKStat
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET StatID=@StatID,
		  PaceID=@PaceID,
  		  DribblingID =@DribblingID,
  		  ShootingID =@ShootingID,
  		  DefendingID =@DefendingID,
  		  PhysicalityID =@PhysicalityID,
  		  PassingID =@PassingID;
  		  #PositionScoreID=@PositionScoreID;
          
# load Diving
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Diving
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET DivingID=@DivingID,
          Acceleration=@acceleration,
          SprintSpeed=@sprint_speed,
          Overall=@gk_diving,
          StatID=@StatID;

# load Handling;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Handling
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET HandlingID=@HandlingID,
          Positioning=@positioning,
          Finishing=@finishing,
          ShotPower=@shot_power,
          LongShots=@long_shots,
          Volleys=@volleys,
          Penalities=@penalties,
          Overall=@gk_handling,
          StatID=@StatID;

# load Speed;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Speed
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET SpeedID=@SpeedID,
          Interceptions=@interceptions,
          HeadingAccuracy=@heading_accuracy,
          Marking=@marking,
          StandingTackle=@standing_tackle,
          SlidingTackle=@sliding_tackle,
          Overall=@gk_speed,
          StatID=@StatID;
  
# load Reflexes;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Reflexes
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET ReflexesID=@ReflexesID,
          Agility=@agility,
          Balance=@balance,
          Reactions=@reactions,
          BallControl=@ball_control,
          Dribbling=@dribbling,
          Composure=@composure,
          Overall=@gk_reflexes,
          StatID=@StatID;

# load Kicking;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Kicking
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET KickingID=@KickingID,
          Vision=@vision,
          Crossing=@crossing,
          FreeKickAccuracy=@free_kick_accuracy,
          ShortPassing=@short_passing,
          LongPassing=@long_passing,
          Curve=@curve,
          Overall=@gk_kicking,
          StatID=@StatID;

# load Positioning;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/gk.csv'
  INTO TABLE Positioning
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@DivingID,@HandlingID,@SpeedID,@ReflexesID,@KickingID,@PosioningID)
  SET PositioningID=@PosioningID,
          Jumping=@jumping,
          Stamina=@stamina,
          Strength=@strength,
          Aggression=@aggression,
          Overall=@gk_positioning,
          StatID=@StatID;

# load Pace;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Pace
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET PaceID=@PaceID,
          Acceleration=@acceleration,
          SprintSpeed=@sprint_speed,
          Overall=@pac,
          StatID=@StatID;

# load Shooting;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Shooting
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET ShootingID=@ShootingID,
		  Positioning=@positioning,
          Finishing=@finishing,
          ShotPower=@shot_power,
          LongShots=@long_shots,
          Volleys=@volleys,
          Penalities=@penalties,
          Overall=@sho,
          StatID=@StatID;

# load Passing;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Passing
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET PassingID=@PassingID,
          Vision=@vision,
          Crossing=@crossing,
          FreeKickAccuracy=@free_kick_accuracy,
          ShortPassing=@short_passing,
          LongPassing=@long_passing,
          Curve=@curve,
          Overall=@pas,
          StatID=@StatID;
  
# load Dribbling;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Dribbling
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET DribblingID=@DribblingID,
          Agility=@agility,
          Balance=@balance,
          Reactions=@reactions,
          BallControl=@ball_control,
          Dribbling=@dribbling,
          Composure=@composure,
          Overall=@dri,
          StatID=@StatID;

# load Physicality;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Physicality
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET PhysicalityID=@PhysicalityID,
          Jumping=@jumping,
          Stamina=@stamina,
          Strength=@strength,
          Aggression=@aggression,
          Overall=@phy,
          StatID=@StatID;

# load Defending;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/nongk.csv'
  INTO TABLE Defending
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID,@PaceID,@ShootingID,@PassingID,@DribblingID,@PhysicalityID,@DefendingID)
  SET DefendingID=@DefendingID,
          Interceptions=@interceptions,
          HeadingAccuracy=@heading_accuracy,
          Marking=@marking,
          StandingTackle=@standing_tackle,
          SlidingTackle=@sliding_tackle,
          Overall=@def,
          StatID=@StatID;
 
# load PositionScore;
LOAD DATA INFILE '~/Desktop/courses/CS5200/project/cs5200/csv_files/complete1.csv'
  INTO TABLE PositionScore
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n' 
  IGNORE 1 LINES
  (@ID,@name,@full_name,@club,@club_logo,@special,@age,@league,@birth_date,@height_cm,@weight_kg,@body_type,@real_face,@flag,@nationality,@photo,@eur_value,@eur_wage,@eur_release_clause,@overall,@potential,@pac,@sho,@pas,@dri,@def,@phy,@international_reputation,@skill_moves,@weak_foot,@work_rate_att,@work_rate_def,@preferred_foot,@crossing,@finishing,@heading_accuracy,@short_passing,@volleys,@dribbling,@curve,@free_kick_accuracy,@long_passing,@ball_control,@acceleration,@sprint_speed,@agility,@reactions,@balance,@shot_power,@jumping,@stamina,@strength,@long_shots,@aggression,@interceptions,@positioning,@vision,@penalties,@composure,@marking,@standing_tackle,@sliding_tackle,@gk_diving,@gk_handling,@gk_kicking,@gk_positioning,@gk_reflexes,@rs,@rw,@rf,@ram,@rcm,@rm,@rdm,@rcb,@rb,@rwb,@st,@lw,@cf,@cam,@cm,@lm,@cdm,@cb,@lb,@lwb,@ls,@lf,@lam,@lcm,@ldm,@lcb,@gk,@1_on_1_rush_trait,@acrobatic_clearance_trait,@argues_with_officials_trait,@avoids_using_weaker_foot_trait,@backs_into_player_trait,@bicycle_kicks_trait,@cautious_with_crosses_trait,@chip_shot_trait,@chipped_penalty_trait,@comes_for_crosses_trait,@corner_specialist_trait,@diver_trait,@dives_into_tackles_trait,@diving_header_trait,@driven_pass_trait,@early_crosser_trait,@fans_favourite_trait,@fancy_flicks_trait,@finesse_shot_trait,@flair_trait,@flair_passes_trait,@gk_flat_kick_trait,@gk_long_throw_trait,@gk_up_for_corners_trait,@giant_throw_in_trait,@inflexible_trait,@injury_free_trait,@injury_prone_trait,@leadership_trait,@long_passer_trait,@long_shot_taker_trait,@long_throw_in_trait,@one_club_player_trait,@outside_foot_shot_trait,@playmaker_trait,@power_free_kick_trait,@power_header_trait,@puncher_trait,@rushes_out_of_goal_trait,@saves_with_feet_trait,@second_wind_trait,@selfish_trait,@skilled_dribbling_trait,@stutter_penalty_trait,@swerve_pass_trait,@takes_finesse_free_kicks_trait,@target_forward_trait,@team_player_trait,@technical_dribbler_trait,@tries_to_beat_defensive_line_trait,@poacher_speciality,@speedster_speciality,@aerial_threat_speciality,@dribbler_speciality,@playmaker_speciality,@engine_speciality,@distance_shooter_speciality,@crosser_speciality,@free_kick_specialist_speciality,@tackling_speciality,@tactician_speciality,@acrobat_speciality,@strength_speciality,@clinical_finisher_speciality,@prefers_rs,@prefers_rw,@prefers_rf,@prefers_ram,@prefers_rcm,@prefers_rm,@prefers_rdm,@prefers_rcb,@prefers_rb,@prefers_rwb,@prefers_st,@prefers_lw,@prefers_cf,@prefers_cam,@prefers_cm,@prefers_lm,@prefers_cdm,@prefers_cb,@prefers_lb,@prefers_lwb,@prefers_ls,@prefers_lf,@prefers_lam,@prefers_lcm,@prefers_ldm,@prefers_lcb,@prefers_gk,@StatID,@PositionScoreID)
  SET PositionScoreID=@PositionScoreID,
          RS=nullif(@rs,''),
          RW=nullif(@rw,''),
          RF=nullif(@rf,''),
          RAM=nullif(@ram,''),
          RCM=nullif(@rcm,''),
          RM=nullif(@rm,''),
          RDM=nullif(@rdm,''),
          RCB=nullif(@rcb,''),
          RB=nullif(@rb,''),
          RWB=nullif(@rwb,''),
          ST=nullif(@st,''),
          LW=nullif(@lw,''),
          CF=nullif(@cf,''),
          CAM=nullif(@cam,''),
          CM=nullif(@cm,''),
          LM=nullif(@lm,''),
          CDM=nullif(@cdm,''),
          CB=nullif(@cb,''),
          LB=nullif(@lb,''),
          LWB=nullif(@lwb,''),
          LS=nullif(@ls,''),
          LF=nullif(@lf,''),
          LAM=nullif(@lam,''),
          LCM=nullif(@lcm,''),
          LDM=nullif(@ldm,''),
          LCB=nullif(@lcb,''),
          # non_gk player do not have gk
          GK=nullif(@gk,''),
          #StatID=@StatID;
          PlayerID=@ID;