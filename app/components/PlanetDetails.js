export const PlanetDetails = ({ currentPlanet, togglePlanetDetails, planetDetailsOpen }) => {
      return (
            <div
                  className={`fixed rounded-t-3xl border-b-0 border text-foreground bg-background min-h-[50%] left-0 transition-all ease-snappy  p-8 bottom-0 w-full ${
                        planetDetailsOpen
                              ? "translate-y-[0%]"
                              : "translate-y-[100%]"
                  }`}
            >
                  <div className="flex justify-between items-center">
                        <div>{currentPlanet.name}</div>
                        <div className="text-lg p-4 -m-4 hover:cursor-pointer">
                              <button onClick={togglePlanetDetails}>
                                    &#x2A09;
                              </button>
                        </div>
                  </div>
                  <div className="flex my-6 flex-col justify-between">
                        <div className="flex justify-between detail-stat">
                              <div>Average Temperature</div>
                              <div>{currentPlanet.averageTemp}°F</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Food Availability</div>
                              <div>{currentPlanet.foodAvailability}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Food Quality</div>
                              <div>{currentPlanet.foodQuality}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Gravity</div>
                              <div>{currentPlanet.gravity}</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Atmospheric Toxicity</div>
                              <div>{currentPlanet.atmosphereToxicity}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Water Availability</div>
                              <div>{currentPlanet.waterAvailability}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Radiation Level</div>
                              <div>{currentPlanet.radiationLevel}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Mineral Richness</div>
                              <div>{currentPlanet.mineralRichness}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Soil Quality</div>
                              <div>{currentPlanet.soilQuality}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Hostile Lifeforms</div>
                              <div>{currentPlanet.hostileLifeforms}%</div>
                        </div>
                        <div className="flex justify-between detail-stat">
                              <div>Population Capacity</div>
                              <div>
                                    {currentPlanet.populationCapacity} BILLION
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default PlanetDetails;
