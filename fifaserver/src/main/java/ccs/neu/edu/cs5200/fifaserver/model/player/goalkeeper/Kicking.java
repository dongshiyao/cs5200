package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class Kicking {
  private int kickingId;
  private int vision;
  private int crossing;
  private int freeKickAccuracy;
  private int shortPassing;
  private int longPassing;
  private int curve;
  private int overall;
  private int gkStatId;

  public Kicking(int kickingId, int vision, int crossing, int freeKickAccuracy, int shortPassing,
                 int longPassing, int curve, int overall, int gkStatId) {
    this.kickingId = kickingId;
    this.vision = vision;
    this.crossing = crossing;
    this.freeKickAccuracy = freeKickAccuracy;
    this.shortPassing = shortPassing;
    this.longPassing = longPassing;
    this.curve = curve;
    this.overall = overall;
    this.gkStatId = gkStatId;
  }

  public int getKickingId() {
    return kickingId;
  }

  public void setKickingId(int kickingId) {
    this.kickingId = kickingId;
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

  public int getGkStatId() {
    return gkStatId;
  }

  public void setGkStatId(int gkStatId) {
    this.gkStatId = gkStatId;
  }
}
