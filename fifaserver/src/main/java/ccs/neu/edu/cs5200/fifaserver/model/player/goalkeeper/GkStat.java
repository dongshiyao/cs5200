package ccs.neu.edu.cs5200.fifaserver.model.player.goalkeeper;

public class GkStat {
  private int statId;
  private int divingId;
  private int handlingId;
  private int reflexesId;
  private int speedId;
  private int kickingId;
  private int positioningId;

  public GkStat(int statId, int divingId, int handlingId, int reflexesId, int speedId,
                int kickingId, int positioningId) {
    this.statId = statId;
    this.divingId = divingId;
    this.handlingId = handlingId;
    this.reflexesId = reflexesId;
    this.speedId = speedId;
    this.kickingId = kickingId;
    this.positioningId = positioningId;
  }

  public int getStatId() {
    return statId;
  }

  public void setStatId(int statId) {
    this.statId = statId;
  }

  public int getDivingId() {
    return divingId;
  }

  public void setDivingId(int divingId) {
    this.divingId = divingId;
  }

  public int getHandlingId() {
    return handlingId;
  }

  public void setHandlingId(int handlingId) {
    this.handlingId = handlingId;
  }

  public int getReflexesId() {
    return reflexesId;
  }

  public void setReflexesId(int reflexesId) {
    this.reflexesId = reflexesId;
  }

  public int getSpeedId() {
    return speedId;
  }

  public void setSpeedId(int speedId) {
    this.speedId = speedId;
  }

  public int getKickingId() {
    return kickingId;
  }

  public void setKickingId(int kickingId) {
    this.kickingId = kickingId;
  }

  public int getPositioningId() {
    return positioningId;
  }

  public void setPositioningId(int positioningId) {
    this.positioningId = positioningId;
  }
}
