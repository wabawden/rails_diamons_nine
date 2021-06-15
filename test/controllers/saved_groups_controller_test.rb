require "test_helper"

class SavedGroupsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get saved_groups_index_url
    assert_response :success
  end

  test "should get show" do
    get saved_groups_show_url
    assert_response :success
  end

  test "should get create" do
    get saved_groups_create_url
    assert_response :success
  end
end
