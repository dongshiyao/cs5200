package ccs.neu.edu.cs5200.fifaserver.model.player.nongoalkeeper;

public class Physicality {
  private int physicalityId;
  private int jumping;
  private int stamina;
  private int strength;
  private int aggression;
  private int overall;
  private int nonGkStatId;

  public Physicality(int physicalityId, int jumping, int stamina, int strength, int aggression,
                     int overall, int nonGkStatId) {
    this.physicalityId = physicalityId;
    this.jumping = jumping;
    this.stamina = stamina;
    this.strength = strength;
    this.aggression = aggression;
    this.overall = overall;
    this.nonGkStatId = nonGkStatId;
  }

  public int getPhysicalityId() {
    return physicalityId;
  }

  public void setPhysicalityId(int physicalityId) {
    this.physicalityId = physicalityId;
  }

  public int getJumping() {
    return jumping;
  }

  public void setJumping(int jumping) {
    this.jumping = jumping;
  }

  public int getStamina() {
    return stamina;
  }

  public void setStamina(int stamina) {
    this.stamina = stamina;
  }

  public int getStrength() {
    return strength;
  }

  public void setStrength(int strength) {
    this.strength = strength;
  }

  public int getAggression() {
    return aggression;
  }

  public void setAggression(int aggression) {
    this.aggression = aggression;
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
