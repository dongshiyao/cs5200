package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class Shooting {
  private int shootingId;
  private int positioning;
  private int finishing;
  private int shotPower;
  private int longShots;
  private int volleys;
  private int penalties;
  private int overall;
  private int nonGkStatId;

  public Shooting(int shootingId, int positioning, int finishing, int shotPower, int longShots,
                  int volleys, int penalties, int overall, int nonGkStatId) {
    this.shootingId = shootingId;
    this.positioning = positioning;
    this.finishing = finishing;
    this.shotPower = shotPower;
    this.longShots = longShots;
    this.volleys = volleys;
    this.penalties = penalties;
    this.overall = overall;
    this.nonGkStatId = nonGkStatId;
  }

  public int getShootingId() {
    return shootingId;
  }

  public void setShootingId(int shootingId) {
    this.shootingId = shootingId;
  }

  public int getPositioning() {
    return positioning;
  }

  public void setPositioning(int positioning) {
    this.positioning = positioning;
  }

  public int getFinishing() {
    return finishing;
  }

  public void setFinishing(int finishing) {
    this.finishing = finishing;
  }

  public int getShotPower() {
    return shotPower;
  }

  public void setShotPower(int shotPower) {
    this.shotPower = shotPower;
  }

  public int getLongShots() {
    return longShots;
  }

  public void setLongShots(int longShots) {
    this.longShots = longShots;
  }

  public int getVolleys() {
    return volleys;
  }

  public void setVolleys(int volleys) {
    this.volleys = volleys;
  }

  public int getPenalties() {
    return penalties;
  }

  public void setPenalties(int penalties) {
    this.penalties = penalties;
  }

  public int getOverall() {
    return overall;
  }

  public void setOverall(int overall) {
    this.overall = overall;
  }

  public int getNonGkStatId() {
    return nonGkStatId;
  }

  public void setNonGkStatId(int nonGkStatId) {
    this.nonGkStatId = nonGkStatId;
  }
}
