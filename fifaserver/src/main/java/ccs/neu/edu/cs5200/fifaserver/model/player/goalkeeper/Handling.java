package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class Handling {
  private int handlingId;
  private int positioning;
  private int finishing;
  private int shotPower;
  private int longShots;
  private int volleys;
  private int penalties;
  private int overall;
  private int gkStatId;

  public Handling(int handlingId, int positioning, int finishing, int shotPower, int longShots,
                  int volleys, int penalties, int overall, int gkStatId) {
    this.handlingId = handlingId;
    this.positioning = positioning;
    this.finishing = finishing;
    this.shotPower = shotPower;
    this.longShots = longShots;
    this.volleys = volleys;
    this.penalties = penalties;
    this.overall = overall;
    this.gkStatId = gkStatId;
  }

  public int getHandlingId() {
    return handlingId;
  }

  public void setHandlingId(int handlingId) {
    this.handlingId = handlingId;
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

  public int getGkStatId() {
    return gkStatId;
  }

  public void setGkStatId(int gkStatId) {
    this.gkStatId = gkStatId;
  }
}
