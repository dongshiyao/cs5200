package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class Positioning {
  private int positionId;
  private int jumping;
  private int stamina;
  private int strength;
  private int aggression;
  private int overall;
  private int gkStatId;

  public Positioning(int positionId, int jumping, int stamina, int strength, int aggression,
                     int overall, int gkStatId) {
    this.positionId = positionId;
    this.jumping = jumping;
    this.stamina = stamina;
    this.strength = strength;
    this.aggression = aggression;
    this.overall = overall;
    this.gkStatId = gkStatId;
  }

  public int getPositionId() {
    return positionId;
  }

  public void setPositionId(int positionId) {
    this.positionId = positionId;
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

  public int getGkStatId() {
    return gkStatId;
  }

  public void setGkStatId(int gkStatId) {
    this.gkStatId = gkStatId;
  }
}
