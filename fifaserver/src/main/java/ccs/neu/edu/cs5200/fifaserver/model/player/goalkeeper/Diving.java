package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class Diving {
  private int divingId;
  private int acceleration;
  private int sprintSpeed;
  private int overall;
  private int gkStatId;

  public Diving(int divingId, int acceleration, int sprintSpeed, int overall, int gkStatId) {
    this.divingId = divingId;
    this.acceleration = acceleration;
    this.sprintSpeed = sprintSpeed;
    this.overall = overall;
    this.gkStatId = gkStatId;
  }

  public int getDivingId() {
    return divingId;
  }

  public void setDivingId(int divingId) {
    this.divingId = divingId;
  }

  public int getAcceleration() {
    return acceleration;
  }

  public void setAcceleration(int acceleration) {
    this.acceleration = acceleration;
  }

  public int getSprintSpeed() {
    return sprintSpeed;
  }

  public void setSprintSpeed(int sprintSpeed) {
    this.sprintSpeed = sprintSpeed;
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
