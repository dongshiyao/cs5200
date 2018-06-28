package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class Speed {
  private int speedId;
  private int interception;
  private int headingAccuracy;
  private int marking;
  private int standingTackle;
  private int slidingTackle;
  private int overall;
  private int gkStatId;

  public Speed(int speedId, int interception, int headingAccuracy, int marking, int standingTackle,
               int slidingTackle, int overall, int gkStatId) {
    this.speedId = speedId;
    this.interception = interception;
    this.headingAccuracy = headingAccuracy;
    this.marking = marking;
    this.standingTackle = standingTackle;
    this.slidingTackle = slidingTackle;
    this.overall = overall;
    this.gkStatId = gkStatId;
  }

  public int getSpeedId() {
    return speedId;
  }

  public void setSpeedId(int speedId) {
    this.speedId = speedId;
  }

  public int getInterception() {
    return interception;
  }

  public void setInterception(int interception) {
    this.interception = interception;
  }

  public int getHeadingAccuracy() {
    return headingAccuracy;
  }

  public void setHeadingAccuracy(int headingAccuracy) {
    this.headingAccuracy = headingAccuracy;
  }

  public int getMarking() {
    return marking;
  }

  public void setMarking(int marking) {
    this.marking = marking;
  }

  public int getStandingTackle() {
    return standingTackle;
  }

  public void setStandingTackle(int standingTackle) {
    this.standingTackle = standingTackle;
  }

  public int getSlidingTackle() {
    return slidingTackle;
  }

  public void setSlidingTackle(int slidingTackle) {
    this.slidingTackle = slidingTackle;
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
