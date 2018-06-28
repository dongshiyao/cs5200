package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class Passing {
  private int passingId;
  private int vision;
  private int crossing;
  private int freeKickAccuracy;
  private int shortPassing;
  private int longPassing;
  private int curve;
  private int overall;
  private int nonGkStatId;

  public Passing(int passingId, int vision, int crossing, int freeKickAccuracy, int shortPassing,
                 int longPassing, int curve, int overall, int nonGkStatId) {
    this.passingId = passingId;
    this.vision = vision;
    this.crossing = crossing;
    this.freeKickAccuracy = freeKickAccuracy;
    this.shortPassing = shortPassing;
    this.longPassing = longPassing;
    this.curve = curve;
    this.overall = overall;
    this.nonGkStatId = nonGkStatId;
  }

  public int getPassingId() {
    return passingId;
  }

  public void setPassingId(int passingId) {
    this.passingId = passingId;
  }

  public int getVision() {
    return vision;
  }

  public void setVision(int vision) {
    this.vision = vision;
  }

  public int getCrossing() {
    return crossing;
  }

  public void setCrossing(int crossing) {
    this.crossing = crossing;
  }

  public int getFreeKickAccuracy() {
    return freeKickAccuracy;
  }

  public void setFreeKickAccuracy(int freeKickAccuracy) {
    this.freeKickAccuracy = freeKickAccuracy;
  }

  public int getShortPassing() {
    return shortPassing;
  }

  public void setShortPassing(int shortPassing) {
    this.shortPassing = shortPassing;
  }

  public int getLongPassing() {
    return longPassing;
  }

  public void setLongPassing(int longPassing) {
    this.longPassing = longPassing;
  }

  public int getCurve() {
    return curve;
  }

  public void setCurve(int curve) {
    this.curve = curve;
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
