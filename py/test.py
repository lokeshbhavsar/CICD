from sum import sum

# ✅ pass
if sum(1, 2) == 3:
    print("Python Test 1 Passed")
else:
    raise Exception("Python Test 1 Failed")

# ❌ fail
if sum(2, 2) == 5:
    print("Python Test 2 Passed")
else:
    raise Exception("Python Test 2 Failed")