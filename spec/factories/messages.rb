FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/business-2717063_1280.jpg")}
    user
    group
  end
end