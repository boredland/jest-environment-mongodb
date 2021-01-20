import MongoDbEnvironment, {
  MongoDbEnvironmentConfig,
} from "jest-environment-mongodb";

export default class EphemeralEnvironment extends MongoDbEnvironment {
  constructor(config: MongoDbEnvironmentConfig) {
    super({
      ...config,
      testEnvironmentOptions: {
        ...config.testEnvironmentOptions,
        instance: {
          ...config.testEnvironmentOptions.instance as Record<string, never>,
          storageEngine: "ephemeralForTest",
        },
      },
    });
  }
}

module.exports = EphemeralEnvironment;
